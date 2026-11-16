import type { ContactItem } from "@/types/content";

export const contact = {
  form: {
    terminalTitle: "TERMINAL_SECURE",
    command: "> ./iniciar_comunicacao.sh",
    commandLabel: "Comando do terminal",
    name: "NOME",
    namePlaceholder: "Visitante",
    email: "EMAIL",
    emailPlaceholder: "visitante@dominio.com",
    subject: "ASSUNTO",
    subjectPlaceholder: "Selecione o assunto...",
    subjectOptions: {
      questions: "Dúvidas gerais",
      selection: "Processo Seletivo",
      partnerships: "Parcerias e Patrocínio",
      other: "Outro assunto",
    },
    message: "MENSAGEM",
    messagePlaceholder: "Digite seu texto...",
    submit: "ENVIAR",
    sending: "ENVIANDO...",
    success:
      "[OK] Mensagem enviada com sucesso! Entraremos em contato em breve.",
    errors: {
      requiredField: "Campo obrigatório",
      invalidEmail: "E-mail inválido",
      missingFields: "Por favor, preencha todos os campos obrigatórios.",
      invalidEmailFormat: "Por favor, insira um formato de e-mail válido.",
    },
  },
  items: [
    {
      type: "email",
      title: "E-mail",
      value: "equipe.unball@gmail.com",
      link: "mailto:equipe.unball@gmail.com",
    },
    {
      type: "github",
      title: "GitHub",
      value: "github.com/unball",
      link: "https://github.com/unball",
    },
    {
      type: "instagram",
      title: "Instagram",
      value: "@equipe.unball",
      link: "https://www.instagram.com/equipe.unball/",
    },
    {
      type: "linkedin",
      title: "LinkedIn",
      value: "/company/equipe-unball",
      link: "https://www.linkedin.com/company/equipe-unball/",
    },
    {
      type: "location",
      title: "Localização",
      value:
        "Unidade de Laboratórios de Ensino e Graduação da Faculdade de Tecnologia (ULEG/FT), UnB - Asa Norte, Brasília - DF",
      link: "https://maps.app.goo.gl/jBjtawWRz8BsJEZS7",
    },
  ] satisfies ContactItem[],
};
