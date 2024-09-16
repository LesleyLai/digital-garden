---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[radiometry|radiometry]]"
publish: true
tags:
  - radiometry
  - "#computer/graphics/RayTracing"
---

# Radiometry Quantities
- **[[radiant energy|Radiant energy]]**
    - *Radiant energy* is "total # of hits" anywhere in the scene over the complete duration of the scene
    - This quantity captures the total *energy*/* of all the photons hitting the scene
    - Unit: Joules (J)

- **[[radiant flux|Radiant flux]]**
    - Energy per second (power)
    - Unit: Joules per second ($J/s$) = Watts ($W$)

- **[[radiant energy density|Radiant energy density]]**
    - Energy per unit area
    - Unit: Joules per square meter ($J/m^2$)

- **[[./irradiance|Irradiance]]**/**Radiant Exitance**
    - flux per unit area incident on a surface
    - Unit: Watts per square meter ($W/m^2$)
    - Irradiance: flux arriving a surface
    - Radiant Exitance: flux leaving a surface

- **[[./radiance|Radiance]]**
    - Power per unit area, per steradian ([[solid angle|solid angle]] unit)
    - Unit ($W/ (m^2 \; sr)$)
    - It is the solid angle density of irradiance