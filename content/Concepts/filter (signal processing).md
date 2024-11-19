---
parent:
  - "[[signal processing|signal processing]]"
tags:
  - math/signal/filter
created: 2024-10-25
modified: 2024-11-18
aliases:
  - "#math/signal/filter"
publish: true
---
A **filter** suppress unwanted components or features from a [[./signal|signal]]. Most often, this means removing some [[frequency and period of waves|frequencies]]. As a result, the [[Fourier transform|Fourier transform]] is an often used tool for analyzing filters as it converts signals into [[./time and frequency domain|frequency domain]].

The behavior of a filter can be described in two ways:
1. In the time domain, as a [[./convolution|convolution]] of the time-domain input with the filter's [[impulse response|impulse response function]]
2. In the frequency domain, using either the [[./transfer function|transfer function]] or [[frequency response|frequency response]] based on the [[./convolution theorem|convolution theorem]]

## Classification of Filters
There are many ways to classify filters and these can overlap in many different ways. Filters may be:
- [[./linear system|non-linear or linear]]
- [[./time invariant system|time-variant or time-invariant]]
- [[./causal system|causal]] or non-causal
- analog or digital
- discrete-time or continuous-time

### By Frequency Response
- [[low-pass filter|Low-pass filter]]: retain low frequency and eliminate others
- High pass filter: retain high frequency and eliminate others
- Band pass filter: retain frequencies in a certain band
- Notch filter (or the band-reject or band-stop filter): attenuates frequencies within a specific range and retains others
- All-pass filter: Passes all frequencies equally in magnitude, but may alter phase
### By Transfer Function
- [[Gaussian filtering|Gaussian filter]]: Uses a Gaussian function for smoothing; can be low-pass in image processing
- [[moving average|Moving average filter (boxcar filter)]]: Smooths data by averaging neighbors