import type { ContactItem } from "@/types/content";

export const contact = {
  form: {
    terminalTitle: "TERMINAL_SECURE",
    command: "> ./start_communication.sh",
    commandLabel: "Terminal command",
    name: "NAME",
    namePlaceholder: "Visitor",
    email: "EMAIL",
    emailPlaceholder: "visitor@domain.com",
    subject: "SUBJECT",
    subjectPlaceholder: "Select subject...",
    subjectOptions: {
      questions: "General Questions",
      selection: "Selection Process",
      partnerships: "Partnerships & Sponsorship",
      other: "Other",
    },
    message: "MESSAGE",
    messagePlaceholder: "Type your text...",
    submit: "SEND",
    sending: "SENDING...",
    success: "[OK] Message sent successfully! We will get in touch soon.",
    errors: {
      requiredField: "Required field",
      invalidEmail: "Invalid email",
      missingFields: "Please fill in all required fields.",
      invalidEmailFormat: "Please enter a valid email format.",
    },
  },
  items: [
    {
      type: "email",
      title: "Email",
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
  ] satisfies ContactItem[],
};
