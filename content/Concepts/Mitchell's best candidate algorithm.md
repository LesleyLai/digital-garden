---
parent:
  - "[[blue noise|blue noise]]"
tags:
  - computing/graphics/noise
  - math/signal/sampling
created: 2024-11-26
modified: 2024-12-12
publish: true
---
The **Mitchell's best candidate algorithm** is an algorithm with the following procedural:
1. Start with N existing blue noise samples (N can be 0 initially)
2. Generate M new candidate points using white noise (where M is scaled with N)
3. Keep the candidate farthest away from any existing point
4. Goto 1 and repeat until the desired number of samples is reached
The algorithm works in any number of dimensions, including on a sphere.

Pseudo code below:
```swift
const SCALING_CONSTANT = 1;

var samples: Vec<Point> = [];
for i from 0 to sample_count {
  // scale candidate count with the current sample count
  let candidate_count = i * SCALING_CONSTANT + 1;

  var best_distance_sq = -FLOAT_MAX;
  var best_candidate = null;
  for _ from 0 to candidate_count {
    let candidate = random_point();

    // Find minimum distance for this sample
    var min_dist_sq = FLOAT_MAX;
    for sample in samples {
      let dist_sq = distance_square(sample, candidate);
      if min_dist_sq > dist_sq { min_dist_sq = dist_sq; }
    }

    if min_dist_sq > best_distance {
        best_distance_sq = min_dist_sq;
        best_candidate = candidate;
    }
  }
  samples.push_back(best_candidate);
}
```

Notice that we use square distance in the above code, as we only need to compare the distance so we can save a bit computation. Also note that scaling the number of candidate by existing sample point is important to guarantee samples of good quality. [^1]

This algorithm produces high-quality blue noise distributions, but its time complexity is `O(n^2 * m)`, where n is the number of samples and m is the number of candidates per sample. For large sample counts or high dimensions, more efficient algorithms like [[fast poisson disk sampling|fast poisson disk sampling]] might be preferred.

[^1]: [Generating Blue Noise Sample Points With Mitchell’s Best Candidate Algorithm « The blog at the bottom of the sea](https://blog.demofox.org/2017/10/20/generating-blue-noise-sample-points-with-mitchells-best-candidate-algorithm/)