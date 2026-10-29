export const papers = {
  empty: "No publications found for the selected filter.",
  yearBadgeText: "YEAR",
  authorsLabel: "AUTHORS:",
  readMore: "Read more",
  readLess: "Read less",
  items: [
    {
      id: 1,
      type: "tcc",
      title:
        "Design of an embedded system for kinematic control of a non-holonomic mobile robot in VSSS competitions",
      authors: ["Sanches, André Dornelas"],
      date: "2026-07-24",
      abstract:
        "This work presents the development of an embedded system for the kinematic control of a nonholonomic differential-drive mobile robot designed to compete in robotics tourna ments in the Very Small Size Soccer (VSSS) category. The project encompasses the definition of the electronic architecture and the implementation of digital control strategies on an ESP32 microcontroller. The embedded platform integrates DC motors with optical encoders, an inertial measurement unit, and a dedicated motor driver, all arranged on a compact printed circuit board designed to meet the physical constraints of the competition. The system receives wireless commands of linear and angular velocities and processes sensor measurements to execute motion control. The development included the modeling of the robot’s dynamics and the experimental identification of actuator parameters, leading to a cascade-control architecture in which a Model Reference Adaptive Controller (MRAC) regulates individual wheel velocities while a higher-level controller commands the robot’s linear and angular motion. Two approaches were evaluated at this upper level, based on PID control and state-feedback control. Experimental results demonstrated that the implemented controllers were able to track velocity references in a stable and repeatable manner, con firming the effective integration between hardware design, system modeling, and embedded control algorithms.",
      url: "https://bdm.unb.br/handle/10483/45124",
      tags: [
        "Robotics",
        "Robots",
        "Mobile robots",
      ],
      ctaText: "Open link",
    },
    {
      id: 2,
      type: "article",
      title:
        "Self-Calibrating Vision-Based Remote Robot Control for the RoboCup@Home League",
      authors: ["Gustavo Silva"],
      date: "2026-06-15",
      abstract:
        "This paper presents the development of a vision-based remote robot control system for the RoboCup@Home League. The system utilizes a combination of computer vision techniques and remote control to enable teleoperation of robots in complex environments. The paper details the architecture of the system, including the camera calibration process, the remote control interface, and the communication protocol. Experimental results demonstrate the effectiveness of the system in enabling precise and intuitive control of robots in simulated and real-world scenarios.",
      url: "https://ieeexplore.ieee.org/document/10607231",
      tags: [
        "RoboCup@Home",
        "Vision-based Control",
        "Remote Operation",
        "Computer Vision",
      ],
      ctaText: "Download file",
    },
    {
      id: 3,
      type: "tcc",
      title:
        "Self-Calibrating Vision-Based Remote Robot Control for the RoboCup@Home League",
      authors: ["Gustavo Silva"],
      date: "2026-06-15",
      abstract:
        "This paper presents the development of a vision-based remote robot control system for the RoboCup@Home League. The system utilizes a combination of computer vision techniques and remote control to enable teleoperation of robots in complex environments. The paper details the architecture of the system, including the camera calibration process, the remote control interface, and the communication protocol. Experimental results demonstrate the effectiveness of the system in enabling precise and intuitive control of robots in simulated and real-world scenarios.",
      url: "https://ieeexplore.ieee.org/document/10607231",
      tags: [
        "RoboCup@Home",
        "Vision-based Control",
        "Remote Operation",
        "Computer Vision",
      ],
      ctaText: "Download file",
    },
  ],
};
