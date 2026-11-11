import type { PaperItem } from "@/types/content";

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
        "Este trabalho apresenta o desenvolvimento de um sistema embarcado para o controle cinemático de um robô móvel não holonômico de tração diferencial, projetado para competir em torneios de robótica na categoria Very Small Size Soccer (VSSS). O projeto abrange desde a definição da arquitetura eletrônica até a implementação de estratégias de controle digital no microcontrolador ESP32. A plataforma embarcada integra motores DC com encoders ópticos, uma unidade inercial e um driver de potência dedicado, todos organizados em uma placa de circuito impresso compacta, desenvolvida especificamente para as restrições físicas da competição. O sistema recebe comandos externos de velocidade linear e angular transmitidos sem fio e processa as medições dos sensores para executar o controle de movimento. O desenvolvimento contemplou a modelagem da dinâmica do robô e a identificação experimental dos atuadores, resultando em uma arquitetura de controle em cascata, na qual um controlador adaptativo por modelo de referência (MRAC) regula as velocidades das rodas enquanto o nível superior comanda as velocidades linear e angular do robô. Em seguida, foram avaliadas duas abordagens de controle nesse nível superior, baseadas em PID e em realimentação de estados. Os resultados experimentais demonstraram que os controladores implementados foram capazes de seguir referências de velocidade de forma estável e reprodutível, evidenciando a integração eficaz entre hardware, modelagem e algoritmos de controle embarcados.",
      url: "https://bdm.unb.br/handle/10483/45124",
      tags: ["Robótica", "Robôs", "Robôs móveis"],
      ctaText: "Abrir Link",
    },
    {
      id: 2,
      type: "tcc",
      title:
        "Análise de viabilidade do uso de motor brushless controlado por Field-Oriented Control para o projeto de robô omnidirecional",
      authors: ["Martins, Maria Cláudia Campos"],
      date: "2026-07-24",
      abstract:
        "Este trabalho apresenta o desenvolvimento de um protótipo de robô omnidirecional direcionado à Small Size League da RoboCup, empregando o driver MKS ESP32 Dual FOC V1.0 em um motor BLDC, aliado à biblioteca SimpleFOC. O controle de velocidade, implementado com o PID da própria biblioteca, apresentou desempenho satisfatório, indicando a viabilidade dos motores, embora tenham sido observados elevados níveis de ruído nas medições, sugerindo a necessidade de avaliar outros drivers. Também é proposta uma primeira versão modular do robô, que viabilizou os primeiros testes de movimentação omnidirecional além de facilitar procedimentos de montagem e manutenção, ainda que demande aprimoramentos em futuras iterações do projeto.",
      url: "https://bdm.unb.br/handle/10483/45129",
      tags: [
        "Robótica",
        "Robôs omnidirecionais",
        "Robôs móveis",
        "Motores",
        "Motores de corrente contínua",
      ],
      ctaText: "Abrir Link",
    },
    {
      id: 3,
      type: "tcc",
      title:
        "Aprendizagem por reforço no contexto de futebol de robôs: RoboCup Soccer Simulation 2D",
      authors: [
        "Dantas, Bruno Andreghetti",
        "Oliveira, Samuel Venzi Lima Monteiro de",
      ],
      date: "2022-05-03",
      abstract:
        "O cenário da aprendizagem de máquina tem crescido cada vez mais nos últimos anos. Junto a isso, iniciativas como a RoboCup buscam incentivar a aplicação dessas técnicas fomentando um cenário competitivo de futebol de robôs. Com a motivação de aumentar a diversidade de ferramentas dentro da categoria RoboCup Soccer Simulation 2D, nesse trabalho foi desenvolvida uma nova plataforma de desenvolvimento e são aplicadas técnicas de aprendizagem por reforço a fim de validá-la. Foram realizados experimentos com técnicas estabelecidas como Sarsa e Q-Learning duplo tendo como objetivo realizar o maior número de gols possíveis durante o período de uma partida. As técnicas utilizadas validaram o funcionamento da plataforma desenvolvida e a utilização de comportamentos pré-programados aliado a Q-Learning duplo obteve uma política que alcançou gols consistentemente.",
      url: "https://bdm.unb.br/handle/10483/30566",
      tags: ["Aprendizado de máquina", "Robótica", "Robôs autônomos"],
      ctaText: "Abrir Link",
    },
    {
      id: 4,
      type: "tcc",
      title:
        "Aprendizado por reforço aplicado à categoria VSSS de futebol de robôs",
      authors: ["Rabelo, Hiago dos Santos"],
      date: "2024-07-10",
      abstract:
        "O aprendizado por reforço é um dos campos de aprendizado de máquina que está ganhando bastante destaque atualmente, especialmente com a utilização de redes neurais e a obtenção de resultados que superam valores obtidos por seres humanos. Devido a isso, há um grande espaço para sua aplicação na robótica. Este trabalho tem como objetivo utilizar técnicas de aprendizado de máquina para obter um agente capaz de realizar gols em uma partida de futebol de robôs. Será utilizado o algoritmo atual da equipe UnBall como referência para comparação nos resultados numéricos. A UnBall é um projeto de extensão da UnB que compete com foco em futebol de robôs autônomos na categoria Very Small Size Soccer (VSSS). Este trabalho possui foco na utilização dos algoritmos Deep Deterministic Policy Gradient (DDPG) e Twin Delayed DDPG (TD3). Embora os agentes obtidos por aprendizado por reforço possam não superar o algoritmo atualmente utilizado pela equipe UnBall, os resultados obtidos indicam que são efetivos na realização da tarefa de direcionar a bola até o gol.",
      url: "https://bdm.unb.br/handle/10483/39227",
      tags: ["Robôs", "Aprendizado por reforço", "Futebol"],
      ctaText: "Abrir Link",
    },
    {
      id: 5,
      type: "tcc",
      title:
        "Detecção de objetos very small size soccer utilizando redes convolucionais YOLO",
      authors: ["Marques, Ayssa Giovanna de Oliveira"],
      date: "2025-03-21",
      abstract:
        "O sistema visual humano analisa uma imagem e, com base em seu conhecimento prévio sobre as características de determinados objetos, identifica quase instantaneamente quais objetos estão presentes, suas localizações e como eles interagem entre si. Algoritmos rápidos e precisos para detecção de objetos podem se aproximar da eficácia da visão humana, permitindo que computadores dirijam carros sem sensores especializados, dispositivos de assistência transmitam informações em tempo real da cena para usuários humanos e desbloqueiem o potencial para sistemas robóticos de uso geral e responsivos. E por que não jogar futebol? Este trabalho propõe uma abordagem para a detecção de objetos em partidas de futebol de robôs da categoria IEEE Very Small Size Soccer (VSSS), utilizando redes neurais convolucionais da família You Only Look Once (YOLO), especificamente a versão YOLOv8-pose. O projeto envolveu a criação de um banco de imagens a partir de vídeos de partidas da IronCup 2020, onde foram anotados os pontos-chave dos robôs e da bola para treinamento do modelo. Foram realizados treinamentos com diferentes variantes do YOLOv8-pose (nano, small, medium, large e extra-large), variando o número de épocas para avaliar a precisão e a perda do modelo. O modelo YOLOv8x-pose demonstrou o melhor desempenho, com menor perda e maior precisão na detecção dos objetos e cálculo da orientação dos robôs. Os resultados mostraram que o sistema proposto, denominado Ballnet Pose, superou o Main System em termos de precisão na localização dos objetos e no cálculo da orientação dos robôs.",
      url: "https://bdm.unb.br/handle/10483/41606",
      tags: [
        "Redes neurais convolucionais (Computação)",
        "Aprendizado de máquina",
        "Visão por computador",
      ],
      ctaText: "Abrir Link",
    },
  ] satisfies PaperItem[],
};
