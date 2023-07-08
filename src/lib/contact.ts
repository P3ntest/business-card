import type { Contact } from "./cockpit.types";

export function IconFromType(type: Contact["type"]) {
  switch (type) {
    case "discord":
      return {
        pack: "logos",
        name: "discord-icon",
      };
    case "instagram":
      return {
        pack: "logos",
        name: "instagram-icon",
      };
    case "github":
      return {
        pack: "logos",
        name: "github-icon",
      };
    case "email": {
      return {
        pack: "ic",
        name: "outline-email",
      };
    }
    case "linkedin": {
      return {
        pack: "logos",
        name: "linkedin-icon",
      };
    }
    case "twitter": {
      return {
        pack: "logos",
        name: "twitter-icon",
      };
    }
    case "whatsapp": {
      return {
        pack: "mdi",
        name: "whatsapp",
      };
    }
    default:
      return {
        pack: "logos",
        name: "discord-icon",
      };
  }
}

export function ContactLink(
  type: Contact["type"],
  value: Contact["value"]
): string {
  switch (type) {
    case "discord":
      return `https://discordapp.com/users/${value}`;
    case "instagram":
      return `https://instagram.com/${value}`;
    case "github":
      return `https://github.com/${value}`;
    case "email":
      return `mailto:${value}`;
    case "linkedin":
      return `https://linkedin.com/in/${value}`;
    case "twitter":
      return `https://twitter.com/${value}`;
    case "whatsapp":
      return `https://wa.me/${value}`;
    default:
      return value;
  }
}
