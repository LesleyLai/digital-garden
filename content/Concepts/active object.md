---
parent:
  - "[[concurrency patterns|concurrency patterns]]"
tags:
  - computing/design_patterns
  - computing/concurrency
created: 2024-05-17
modified: 2024-06-09
publish: true
---
An **active object** encapsulates a thread and a concurrent message queue, functioning as an asynchronous logical worker. When methods are called on an active object, they invoke asynchronous [[message passing|messages]], and the thread's main function operates as a message pump.

As the active object processes messages sequentially, each message is handled atomically in relation to the others, eliminating the need for internal or external locking and synchronization.

Active objects raise the semantics compare to raw threads. It is useful to express long-running workers, decoupling independent works, and encapsulate resource access (like file I/O).

## Example Code in C++
### An “Active” Helper
```cpp
class Active {
public:
  using Message = move_only_function<void()>;
  Active() : thd([=]{ while (!done) mq.receive()(); }) {} 

  ~Active() { 
    Send([=]{ done = true; }); // signal shutdown
  }

  void Send( Message m ) { mq.send(m); } // enqueue a message

private:
  bool done = false;
  message_queue<Message> mq;
  jthread thd;
};
```

### Writing a Background Worker
```cpp
class Backgrounder {
public:
  void Save( string filename ) { 
    a.Send( [=] { … } ); 
  }
  
  void Print( unique_ptr<Data> data ) { 
    a.Send( [=, data = move(data)] { … } );
  }
private:
  OptionalState somePrivateStateAcrossCalls; // if desirable
  Active a; // + ordered destruction
};
```

## Related
- [[actor model|actor model]]