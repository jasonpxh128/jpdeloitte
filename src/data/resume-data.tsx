import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  intellogo,
  abblogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jason Pua",
  initials: "JP",
  location: "Kuala Lumpur, Malaysia",
  locationLink: "https://www.google.com/maps/place/kualalumpur",
  about:
    "Sales Application Engineer with interest in AI and building all things compute software & hardware.",
  summary:
    "Dynamic and results-driven professional with extensive experience in leading digital transformation initiatives in AI inference and data analytics across diverse industries. Proven track record of fostering collaborative environments, mentoring teams, and delivering innovative solutions that drive client success. Adept at leveraging data analytics and technology strategy to solve complex business challenges and enhance operational efficiency.",
  avatarUrl: "https://avatars.githubusercontent.com/u/85380986?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "puaxianhao@gmail.com",
    tel: "+60183728819",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jasonpxh128",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jason-pua-080022111/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "N/A",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Monash University",
      degree: "Bachelor's Electrical and Computer Systems",
      start: "2012",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Intel",
      link: "https://www.intel.com/content/www/us/en/homepage.html",
      badges: ["SEA ANZ"],
      title: "Sales Application Engineer",
      logo: intellogo,
      start: "2021",
      end: null,
      description:
        "Account management for OEMs and MNC. Focused on revenue growth and technical enablement for Client, Data Center and IoT sectors. ",
    },
    {
      company: "ABB",
      link: "https://global.abb/group/en",
      badges: ["Malaysia"],
      title: "Engineer - Sales Specialist",
      logo: abblogo,
      start: "2016",
      end: "2021",
      description:
        "Key account & Channel Partner managment for SEA. Spearhead Induction Motor business and Inverters for public sector and key OnG Accounts ",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "OpenAI",
    "Python",
    "Pytorch",
  ],
  projects: [
    {
      title: "Llama 3.1 & Whisper v3 long text summarization",
      techStack: [
        "LLM & GenAI",
        "Intel Demo",
        "Whisper V3",
        "OpenAI",
        "Pytorch",
        "HuggingFace",
        "OpenVino"
      ],
      description:
        "Llama3.1 has just been released with a phenomenal context length of 128K tokens. This means that transcriptions can now be easily summarized without the need to break them into chunks.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
