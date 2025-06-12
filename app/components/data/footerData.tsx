import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export interface SocialLinkType {
  href: string;
  icon: React.ReactNode;
}

export interface LinkType {
  href: string;
  text: string;
}

export const socialLinks: SocialLinkType[] = [
  { href: "https://facebook.com", icon: <FaFacebookF /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
];

export const quickLinks: LinkType[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/enroll", text: "Enroll Now" },
];

export const contactLinks: LinkType[] = [
  { href: "tel:+2347063097056", text: "+2347063097056" },
  { href: "tel:+9168352242", text: "+2349168352242" },
  { href: "mailto:info@pistonandfusion.org", text: "info@pistonandfusion.org" },
];

export const addresses: string[] = [
  "122A Obadina Street, Omole Phase 1, Ikeja, Lagos.",
];

export const legalLinks: LinkType[] = [
  { href: "/terms", text: "Terms of Service" },
  { href: "/privacy", text: "Privacy Policy" },
];
