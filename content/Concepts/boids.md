---
created: 2021-01-06
modified: 2024-03-14
publish: true
tags:
  - "#computer/graphics/Simulation"
title: Boids Flock Simulation
---
See [my 2021 presentation](https://www.youtube.com/watch?v=PPsP1unDkSg) on this topic.

In the Boids algorithm, particles represent birds and fishes move following three principles:

1. *cohesion* - boids move towards the perceived center of mass of neighbors
2. *separation* - boids avoid getting too close to their neighbors
3. *alignment* - boids generally try to move with the same direction and speed as their neighbors

We can use the above rules to update particle velocity and use the [[Euler method|Euler method]] to calculate the position change.

Here are the pseudo-code for the updating functions according to the three rules:

## Rule 1: Boids Try to Fly towards the Centre of Mass of Neighboring Boids
![[../Boid cohesion.svg|Boid cohesion.svg]]
``` python
def cohesion(boid: Boid, boids: Boid):
  perceived_center = Point3(0.0)
  number_of_neighbors = 0
  for b in boids:
    if b != boid and distance(b, boid) < rule1_distance:
      perceived_center += b.position
      ++number_of_neighbo
   perceived_center /= number_of_neighbors
   return (perceived_center - boid.position) * rule1_scale
```

## Rule 2: Boids Try to Keep a Small Distance away from other Boids
![[../Boid seperation.svg|Boid seperation.svg]]
``` python
def separation(boid: Boid, boids: Boid):
  c = Vec3(0.0)
  for b in boids:
    if b != boid and distance(b, boid) < rule2_distance:
      c -= (b.position - boid.position)
  return c * rule2_scale
```

## Rule 3: Boids Try to Match Velocity with near Boids.
![[../Boid alignment.svg|Boid alignment.svg]]
``` python
def alignment(boid: Boid, boids: Boid):
  perceived_velocity = Vec3(0.0)
  number_of_neighbors = 0
  for b in boids:
    if b != boid and distance(b, boid) < rule3_distance:
      perceived_velocity += b.velocity
      ++number_of_neighbors

  perceived_velocity /= number_of_neighbors
  return perceived_velocity * rule3_scale
```