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
      type: "tcc",
      title:
        "Feasibility analysis of using a brushless motor controlled by Field-Oriented Control for the design of an omnidirectional robot",
      authors: ["Martins, Maria Cláudia Campos"],
      date: "2026-07-24",
      abstract:
      "This work presents the development of a prototype of an omnidirectional robot designed for the RoboCup Small Size League, employing the MKS ESP32 Dual FOC V1.0 driver in a BLDC motor, together with the SimpleFOC library. The speed control, implemented using the library’s built-in PID, showed satisfactory performance, indicating the feasibility of the motors, although high noise levels were observed in the current measurements, suggesting the need to evaluate alternative drivers. Furthermore, a first modular version of the robot is proposed, enabling the initial tests of omnidirectional motion and facilitating assembly and maintenance procedures, although improvements are still required in future iterations of the project.",
      url: "https://bdm.unb.br/handle/10483/45129",
      tags: [
        "Robotics",
        "Omnidirectional robots",
        "Mobile robots",
        "Motors",
        "Direct current motors",
      ],
      ctaText: "Open link",
    },
    {
      id: 3,
      type: "tcc",
      title:
        "Reinforcement learning in the context of robot soccer: RoboCup Soccer Simulation 2D",
      authors: [
        "Dantas, Bruno Andreghetti",
        "Oliveira, Samuel Venzi Lima Monteiro de",
      ],
      date: "2022-05-03",
      abstract:
        "The machine learning field has been increasingly growing over the last few years. Furthermore,scientific initiatives such as RoboCup seek to promote studies and applications of these techniquesby nurturing a competitive environment for robot soccer. In this project, with the motivationof expanding the diversity of tools in the RoboCup Soccer Simulation 2D category, a new deve-lopment platform was created and reinforcement learning techniques were applied to validate it.Experiments were run using established techniques, such as Sarsa and Double Q-Learning, withthe goal of scoring as many goals as possible during a match period. The techniques used validatedthe platform’s operation and the use of pre-programmed behaviors along with Double Q-Learningresulted in a policy capable of consistently scoring goals.",
      url: "https://bdm.unb.br/handle/10483/30566",
      tags: [
        "Machine learning",
        "Robotics",
        "Autonomous robots",
      ],
      ctaText: "Open link",
    },
    {
      id: 4,
      type: "tcc",
      title:
        "Reinforcement learning applied to the VSSS category of robot soccer",
      authors: ["Rabelo, Hiago dos Santos"],
      date: "2024-07-10",
      abstract:
        "Reinforcement learning is one of the fields of machine learning that is gaining considerable attention, especially with the use of neural networks and achieving results that outperform those obtained by humans. As a result, there is significant potential for its application in robotics. This work aims to utilize machine learning techniques to obtain an agent capable of scoring goals in a robot soccer game. The current algorithm of the UnBall team will be used as a reference for comparison in the numerical results. UnBall is an extension project of UnB that competes with a focus on autonomous robot soccer in the Very Small Size Soccer (VSSS) category. This work will focus on the utilization of Deep Deterministic Policy Gradient (DDPG) and Twin Delayed DDPG (TD3) algorithms. Although the agents obtained through reinforcement learning may not outperform the algorithm currently used by the UnBall team, they are expected to be effective in directing the ball toward the goal.",
      url: "https://bdm.unb.br/handle/10483/39227",
      tags: [
        "Robots",
        "Reinforcement learning",
        "Soccer",
      ],
      ctaText: "Open link",
    },
    {
      id: 5,
      type: "tcc",
      title:
        "Very Small Size Soccer object detection using YOLO convolutional networks",
      authors: ["Marques, Ayssa Giovanna de Oliveira"],
      date: "2025-03-21",
      abstract:
        "The human visual system analyzes an image and, based on its prior knowledge about the characteristics of certain objects, almost instantly identifies which objects are present, their locations and how they interact with each other. Fast and accurate object detection algorithms can approach the effectiveness of human vision, enabling computers to drive cars without specialized sensors, assistive devices to transmit real-time scene information to human users, and unlock the potential for general-purpose, responsive robotic systems. And why not play soccer? This work proposes an approach for object detection in IEEE Very Small Size Soccer (VSSS) matches using convolutional neural networks from the You Only Look Once (YOLO) family, specifically the YOLOv8-pose version. The project involved creating an image dataset from videos of matches from the IronCup 2020, where keypoints of the robots and the ball were annotated for model training. Training sessions were conducted with different variants of YOLOv8-pose (nano, small, medium, large, and extra-large), varying the number of epochs to evaluate the model’s accuracy and loss. The YOLOv8x-pose model demonstrated the best performance, with the lowest loss and highest accuracy in object detection and robot orientation calculation. The results showed that the proposed system, named BallnetPose, outperformed the Main System in terms of both accuracy in object localization and robot orientation calculation.",
      url: "https://bdm.unb.br/handle/10483/41606",
      tags: [
        "Convolutional neural networks",
        "Machine learning",
        "Computer vision",
      ],
      ctaText: "Open link",
    },
  ],
};
