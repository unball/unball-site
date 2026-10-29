export const papers = {
  empty: "Nenhuma publicação encontrada para o filtro selecionado.",
  yearBadgeText: "ANO",
  authorsLabel: "AUTORES:",
  readMore: "Leia mais",
  readLess: "Leia menos",
  items: [
    {
      id: 1,
      type: "tcc",
      title:
        "Projeto de sistema embarcado para controle cinemático de robô móvel não-holonômico em competições VSSS",
      authors: ["Sanches, André Dornelas"],
      date: "2026-07-24",
      abstract:
        "Este trabalho apresenta o desenvolvimento de um sistema embarcado para o controle cine mático de um robô móvel não holonômico de tração diferencial, projetado para competir em torneios de robótica na categoria Very Small Size Soccer (VSSS). O projeto abrange desde a definição da arquitetura eletrônica até a implementação de estratégias de controle digital no microcontrolador ESP32. A plataforma embarcada integra motores DC com encoders ópticos, uma unidade inercial e um driver de potência dedicado, todos organizados em uma placa de circuito impresso compacta, desenvolvida especificamente para as restrições físicas da competição. O sistema recebe comandos externos de velocidade linear e angular transmitidos sem fio e processa as medições dos sensores para executar o controle de movi mento. O desenvolvimento contemplou a modelagem da dinâmica do robô e a identificação experimental dos atuadores, resultando em uma arquitetura de controle em cascata, na qual um controlador adaptativo por modelo de referência (MRAC) regula as velocidades das rodas enquanto o nível superior comanda as velocidades linear e angular do robô. Em seguida, foram avaliadas duas abordagens de controle nesse nível superior, baseadas em PID e em realimentação de estados. Os resultados experimentais demonstraram que os controla dores implementados foram capazes de seguir referências de velocidade de forma estável e reprodutível, evidenciando a integração eficaz entre hardware, modelagem e algoritmos de controle embarcados.",
      url: "https://bdm.unb.br/handle/10483/45124",
      tags: [
        "Robótica",
        "Robôs",
        "Robôs móveis",
      ],
      ctaText: "Abrir Link",
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
      ctaText: "Baixar arquivo",
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
      ctaText: "Baixar arquivo",
    },
  ],
};
