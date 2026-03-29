// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// Do NOT modify component files — only edit this config.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Noxx",
  logoAccent: "Bots",
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Bots", href: "#bots" },
    { label: "Contact", href: "mailto:member3371@outlook.com" },
  ],
  ctaText: "Join Discord Server",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "THE NEW ERA",
  titleLine2: "OF DISCORD BOTS",
  subtitle: "24/7 Uptime • 200 Users • 12 Commands",
  ctaText: "Join Discord Server",
  ctaHref: "https://discord.gg/r4ider",
  backgroundImage: "/images/hero-bg.png",
  gridRows: 6,
  gridCols: 8,
  pinkCells: [
    { row: 0, col: 0 },
    { row: 0, col: 7 },
    { row: 2, col: 3 },
    { row: 3, col: 5 },
    { row: 5, col: 1 },
    { row: 5, col: 6 },
  ],
};

// ----------------------------------------------------------------------------
// Product Showcase Section
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "NUMBER 1 FASTEST BOTS",
  headingMain: "NOXX",
  headingAccent: "BOTS",
  productName: "/r4ider",
  description: "NoxxBots Made to be the best ever. Experience lightning-fast performance with our cutting-edge Discord bots designed for maximum efficiency and reliability. Built with passion, engineered for excellence.",
  price: "",
  features: [
    { value: "2", label: "NoxxBots" },
    { value: "24/7", label: "Uptime" },
    { value: "200+", label: "Users" },
  ],
  colorSwatches: [],
  colorSwatchesLabel: "",
  ctaText: "Join Server",
  productImage: "/images/product-new.png",
  productImageAlt: "NoxxRaider Bot",
  decorativeText: "NOXXRAIDER",
};

// ----------------------------------------------------------------------------
// Color Palette Section (Now Features Section)
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "NOXX ULTIMATE",
  headingMain: "/",
  headingAccent: "r4ider",
  colors: [
    {
      name: "r4id bot",
      nameSecondary: "RAID",
      color: "#ffd700",
      description: "Over 12 commands • Fast & easy to use • The ultimate raid bot • Rate limit protection • Works in private channels!",
    },
    {
      name: "N4ke Bot",
      nameSecondary: "NUKE",
      color: "#ff3333",
      description: "Over 50 created channels • 20 second nuke time • Easy to use • Over 1k pings • Mass destruction tool",
    },
  ],
  bottomText: "If u cant beat them Join them",
  decorativeText: "NOXXBOTS",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "NOXXRAIDER",
  headingMain: "THE BEST",
  headingAccent: "THING I MADE",
  tagline: "Join our community of 200+ users experiencing the power of NoxxBots. Built for speed, designed for dominance. The ultimate Discord bot experience awaits you.",
  features: [],
  ctaText: "Join Discord Server",
  ctaHref: "https://discord.gg/r4ider",
  image: "/images/finale-new.png",
  imageAlt: "NoxxRaider",
  decorativeText: "NOXX",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube" | "discord";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "Noxx",
  logoAccent: "Raider",
  brandDescription: "The best Discord bots ever made. Fast, reliable, and built for dominance.",
  socialLinks: [
    { platform: "discord", href: "https://discord.gg/r4ider", label: "Discord" },
  ],
  linkSections: [
    { title: "Bots", links: ["r4id Bot", "N4ke Bot"] },
    { title: "Links", links: ["Features", "Join Server"] },
  ],
  contact: {
    address: "",
    phone: "",
    email: "member3371@outlook.com",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText: "NoxxRaider. All rights reserved.",
  decorativeText: "NOXXRAIDER",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "NoxxRaider - The Best Discord Bots",
  description: "NoxxBots - The new era of Discord bots. 24/7 uptime, 200+ users, 12+ commands. Join discord.gg/r4ider",
  language: "en",
};
