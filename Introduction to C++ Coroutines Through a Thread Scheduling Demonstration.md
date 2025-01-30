---
created: 2023-09-26
modified: 2024-03-14
---
# Introduction to C++ Coroutines Through a Thread Scheduling Demonstration

create: 2023-09-26 16:06
Tags: #Literature/Videos #computing/asynchronous #computing/concurrency #computing/cpp/coroutine  
Video: [Introduction to C++ Coroutines Through a Thread Scheduling Demonstration - Dian-Lun Lin CppNow 2023 - YouTube](https://youtu.be/kIPzED3VD3w?si=MpZMFbIRs2SMEhd4)

---

Main: [[./content/Concepts/C++ Coroutines|C++ Coroutines]]

```cpp
struct Coro {
// The coroutine class must define promise type
struct promise_type {
 // Do you want to suspend a coroutine when you first call it
 std::suspend_always initial_suspend() noexcept { return {}; }
 std::suspend_always final_suspend() noexcept { return {}; }

 Coro get_return_object() {
   return std::coroutine_handle<promise_type>::from_promise(*this);
 }
 void return_void() {}
 void unhandled_exception() {}
};

Coro(std::coroutine_handle<promise_type> handle) : handle_{handle} {}

private:
std::coroutine_handle<promise_type> handle_;
};
```

`std::suspend_always` is a standard library Awaitable. And we can define our own Awaitable.

## Compiler Transformation

Why we need a promise type? The compiler will transform coroutine functions in the following way:

From

```cpp
Coro gpu_work() {
  setup();
  while (not_finish) {
    co_await std::suspend_always();
  }
}
```

to

```cpp
Coro gpu_work() {
  Coro::promise_type p();
  Coro coro_obj = p.get_return_object();

  try {
    co_await p.initial_suspend();
    setup();
    while (not_finish) {
      co_await std::suspend_always();
    }
  } catch(...) {
    p.unhandled_exception();
  }

  while (not_finish) {
    co_await std::suspend_always();
  }
  co_await p.final_suspend();
}
```

### How to Define an Awaitable

An Awaitable need three methods

- `await_ready()`
- `await_suspend()`
- `await_resume()`

Something like the following

```cpp
co_await std::suspend_always();
```

is transformed to the following by compiler

```cpp
auto&& awaiter = std::suspend_always{};
if (!awaiter.await_ready()) {
  awaiter.await_suspend(std::coroutine_handle<>...);
  //<suspend/resume>
}
awaiter.await_resume();
```

## Coroutine Handle

A coroutine handle is like a pointer to the coroutine. And you can access promise and coroutine via coroutine handle

![[./content/assets/coroutine_handle.png|coroutine_handle.png]]

A `coroutine_handle<>` specialization can represent any handle, but you lose the ability to get promise from the handle.

### Additional Methods

- `handle.resume()` -> resume the coroutine
- `handle.done()` -> check if the coroutine has completed
- `handle.destroy()` -> destroy the coroutine (usually shouldn't be called manually)

## Demonstrate Scheduler

Code: [GitHub - dian-lun-lin/cpp_coroutine_examples: Scheduling examples using C++20 coroutines](https://github.com/dian-lun-lin/cpp_coroutine_examples)

### Single Threaded Example

Tasks

```cpp
Task TaskA(Scheduler& sch) {
  print("Hello from TaskA\n");
  co_await sch.suspend();
  print("Executing the TaskA\n");
  co_await sch.suspend();
  print("TaskA is finished\n");
}

Task TaskB(Scheduler& sch) {
  print("Hello from TaskB\n");
  co_await sch.suspend();
  print("Executing the TaskB\n");
  co_await sch.suspend();
  print("TaskB is finished\n");
}
```

Main

```cpp
int main() {
  Scheduler sch;

  // Emplace coroutine handles
  sch.emplace(TaskA(sch).get_handle());
  sch.emplace(TaskB(sch).get_handle());

  // Schedule all emplaced tasks
  sch.schedule();
}
```

Definition of the coroutine

```cpp
struct Task {

  struct promise_type {
    std::suspend_always initial_suspend() noexcept { return {}; }
    std::suspend_always final_suspend() noexcept { return {}; }

    Task get_return_object() { return std::coroutine_handle<promise_type>::from_promise(*this); }
    void return_void() {}
    void unhandled_exception() {}
  };

  Task(std::coroutine_handle<promise_type> handle): handle{handle} {}

  auto get_handle() { return handle; }

  std::coroutine_handle<promise_type> handle;
};

```

Definition of the scheduler

```cpp
class Scheduler {
  std::queue<std::coroutine_handle<>> _tasks;

  public:
    void emplace(std::coroutine_handle<> task) {
      _tasks.push(task);
    }

    void schedule() {
      while(!_tasks.empty()) {
        //auto task = _tasks.front();
        auto task = _tasks.top();
        _tasks.pop();
        task.resume();

        if(!task.done()) { // done is a builtin function inside a coroutine handle
          _tasks.push(task);
        }
        else {
          task.destroy();
        }
      }
    }

    auto suspend() {
      return std::suspend_always{};
    }
};
```

Since a queue is FIFO, we should get the following result

```
Hello from TaskA
Hello from TaskB
Executing the TaskA
Executing the TaskB
TaskA is finished
TaskB is finished
```

If we change the queue to a stack, then we get

```
Hello from TaskB
Executing the TaskB
TaskB is finished
Hello from TaskA
Executing the TaskA
TaskA is finished
```

### Multi-Threaded Example

The user code and the `Task` type is the same.

The main function is almost the same, though we have an additional `.wait()` function to wait all task finishes

````cpp
```cpp
int main() {
  Scheduler sch;

  sch.emplace(TaskA(sch).get_handle());
  sch.emplace(TaskB(sch).get_handle());

  sch.schedule();

  sch.wait();
}
````

The most important difference is in the scheduler itself

```cpp
class Scheduler {
  public:
    Scheduler(size_t num_threads = std::thread::hardware_concurrency());

    void emplace(std::coroutine_handle<> task);
    auto suspend();
    void schedule();
    void wait();

  private:
    // all emplaced tasks
    std::vector<std::coroutine_handle<>> _tasks;
    // tasks ready to resume()
    std::queue<std::coroutine_handle<>> _pending_tasks;

    std::vector<std::thread> _workers;
    std::mutex _mtx;
    std::condition_variable _cv;
    bool _stop{false};
    std::atomic<size_t> _finished{0};

    // Insert a task for execution
    void _enqueue(std::coroutine_handle<> task);

    // resume a task
    void _process(std::coroutine_handle<> task);
};


Scheduler::Scheduler(size_t num_threads) {
  _workers.reserve(num_threads);

  for(size_t t = 0; t < num_threads; ++t) {
    _workers.emplace_back([this]() {
        while(true) {
          std::coroutine_handle<> task;
          {
            std::unique_lock<std::mutex> lock(_mtx);
            _cv.wait(lock, [this]{ return _stop || (!_pending_tasks.empty()); });
            if(_stop) {
              return;
            }


            task = _pending_tasks.front();
            _pending_tasks.pop();
          }
          if(task) {
            _process(task);
          }
        }
      }
    );
  }
}


void Scheduler::emplace(std::coroutine_handle<> task) {
  _tasks.emplace_back(task);
}


void Scheduler::schedule() {
  for(auto task: _tasks) {
    _enqueue(task);
  }
}


auto Scheduler::suspend() {
  return std::suspend_always{};
}


void Scheduler::wait() {
  for(auto& w: _workers) {
    w.join();
  }
}


void Scheduler::_enqueue(std::coroutine_handle<> task) {
  {
    std::unique_lock<std::mutex> lock(_mtx);
    _pending_tasks.push(task);
  }
  _cv.notify_one();
}


void Scheduler::_process(std::coroutine_handle<> task) {
  task.resume();


  if(!task.done()) {
    _enqueue(task);
  }
  else {
    task.destroy();
    if(_finished.fetch_add(1) + 1 == _tasks.size()) {
      {
        std::unique_lock<std::mutex> lock(_mtx);
        _stop = true;
      }
      _cv.notify_all();
    }
  }
}
```

The main difference of this scheduler and a traditional callback based scheduler is the task type. In here we have `coroutine_handle`, and in a traditional implementation we will have something like `std::function`

## CPU/GPU Scheduler

The scheduler is the same. To use it for GPU work, we can do something like this:

```cpp
Task TaskB(Scheduler& sch) {
  cudaStream_t stream;

  cudaStreamCreate(&stream);
  gpu_kernel<<<8, 256, 0, stream>>>(counter);

  while(cudaStreamQuery(stream) != cudaSuccess) {
    co_await sch.suspend();
  }
}
```
