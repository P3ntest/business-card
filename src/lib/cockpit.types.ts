export interface Contact {
  type:
    | "discord"
    | "email"
    | "github"
    | "linkedin"
    | "twitter"
    | "whatsapp"
    | "instagram"
    | "custom";

  value: string;
}

export interface LinkGroup {
  title: string;
  links: Link[];
}

export interface Link {
  href: string;
  icon: string;
  label: string;
}
