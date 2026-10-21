---
title: ROS + OpenCV Lane Detection
summary: Real-time lane detection from a USB camera stream with PID-ready steering signal generation — Teknofest Robotaksi prototype.
outcome: Real-time lane masking and steering angle with a classic OpenCV pipeline; source code is open on GitHub.
status: prototype
category: robotics
context: Teknofest Robotaksi
badges: [Open source]
tags: [ROS, OpenCV, Python, C++]
stack: [ROS, OpenCV, Python, C++, Canny, Hough, PID]
facts:
  - { label: "Category", value: "Computer Vision / Autonomous Driving" }
  - { label: "Context", value: "Real-time prototype for Teknofest Robotaksi" }
  - { label: "Input", value: "USB camera or ROS camera driver" }
  - { label: "Output", value: "Lane masking & steering angle (PID-ready)" }
  - { label: "Platform", value: "ROS (Ubuntu), OpenCV" }
links:
  - { label: GitHub repository, href: "https://github.com/mr-ozdemir/Lane-detection-with-Opencv-in-Ros" }
cover: ../../../assets/images/projects/lane-cover.jpg
coverAlt: ROS + OpenCV lane detection cover image
gallery:
  - { src: ../../../assets/images/projects/lane-1.png, alt: ROS + OpenCV lane detection — overview, caption: Overview. }
  - { src: ../../../assets/images/projects/lane-2.png, alt: Edge image after ROI and Canny, caption: Edge image after ROI and Canny. }
  - { src: ../../../assets/images/projects/lane-3.png, alt: Hough lines and lane centre line, caption: Hough lines and lane centre line. }
  - { src: ../../../assets/images/projects/lane-4.png, alt: Steering angle overlay sent to the PID controller, caption: Steering angle sent to the PID controller. }
featured: false
order: 6
---

## Algorithm pipeline

The system targets *real-time* performance with a classic OpenCV-based lane detection approach:

1. **ROI (Region of Interest):** Masking the road's region of interest (lower triangle/polygon).
2. **Preprocessing:** Grayscale, Gaussian blur, dynamic thresholding.
3. **Edge extraction (Canny):** Extracting candidate line edges.
4. **HoughLinesP:** Finding right/left lane candidates as line segments.
5. **Symmetry & merging:** Filtering the lines and merging by slope/continuity.
6. **Heading angle estimation:** Computing deviation relative to the lane centre and generating `steering_angle`.
7. **Optional corrections:** Temporal-window smoothing, jitter reduction.

## Example ROS topics

- `/camera/image_raw` — Input image
- `/lane/overlay` — Detected lane overlay (optional)
- `/lane/steering_angle` — Steering angle (float)
- `/lane/pid` — PID control input (optional)

## Example parameters

| Parameter | Description | Example |
| --- | --- | --- |
| `canny_low` | Lower edge threshold | 50 |
| `canny_high` | Upper edge threshold | 150 |
| `hough_threshold` | Hough vote threshold | 30 |
| `minLineLength` | Minimum line length | 25 |
| `maxLineGap` | Line merging gap | 20 |
| `roi_vertices` | Region-of-interest polygon | lower triangle |
| `smoothing_window` | Angle smoothing window | 5 |

Topic names, node names and parameter files are defined within the repository; the values here are a general template.

## Setup & running (example)

```bash
# ROS & dependencies (example: Noetic / Ubuntu 20.04)
sudo apt update
sudo apt install ros-noetic-desktop-full python3-opencv

# Workspace and repository
mkdir -p ~/catkin_ws/src && cd ~/catkin_ws/src
git clone https://github.com/mr-ozdemir/Lane-detection-with-Opencv-in-Ros.git
cd .. && catkin_make && source devel/setup.bash

# Camera driver and lane detection
roslaunch usb_cam usb_cam-test.launch
roslaunch lane_detection lane_detection.launch
```

Commands may vary depending on the repository structure; adapt them to the README/launch files in the repository.

## Notes & potential improvements

- The ROI and edge/line thresholds should be tuned to the field for different lighting/surface conditions.
- FPS/latency targets depend on resolution and hardware; more stable real-time performance is achieved at 640×480.
- The classic method could be combined with segmentation-based approaches (e.g., U-Net, ENet) in a hybrid scheme.
- A ROS2 port and hardware acceleration (GPU/OpenCL) can be planned.
