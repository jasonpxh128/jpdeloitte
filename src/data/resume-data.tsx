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
import { pdficon } from "@/components/icons/pdficon";
import { Languages } from "lucide-react";

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
        name: "PDF",
        url: "https://raw.githubusercontent.com/jasonpxh128/jpdeloitte/refs/heads/main/public/Jason%20Pua%20-%20Resume.pdf",
        icon: pdficon,
      },
    ],
  },
  education: [
    {
      school: "Monash University",
      degree: "Bachelor's Electrical and Computer Systems - First Class Honours Graduate",
      start: "2012",
      end: "2015",
    },
  ],
  languages: [
    {
      Language:"",
      Proficiency: "English",
    },
    {
      Language:"",
      Proficiency: "Mandarin",
    },
    {
      Language:"",
      Proficiency: "Korean (limited proficiency)",
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
        "Account management for OEMs and MNCs such as Lenovo/Dell and Siemens/GE/Honeywell. Focused on revenue growth and technical enablement for Client, Data Center and IoT sectors. ",
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
    "VM - Proxmox",
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
        href: "https://www.linkedin.com/pulse/llama3-whisper-v3-long-text-summarization-intel-xeon-cpu-jason-pua-v66de/?trackingId=R2Nc1F5URmu41my4vImzOA%3D%3D",
      },
    },
    {
      title: "Running Llama3 model on Llama.cpp with Intel Flex GPU",
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
        "Running Llama3 model on Intel FLEX 170 GPU with llama.cpp",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://www.linkedin.com/pulse/how-run-llama3-models-llamacpp-intel-gpus-sycl-oneapi-jason-pua-5g6vc/?trackingId=PgxN1cPCfuUKfgPvkIzveQ%3D%3D",
      },
    },
    {
      title: "OpenVINO Asynchronous Inferencing with ANOMALIB",
      techStack: [
        "Intel Demo",
        "OneAPI",
        "OpenVINO",
        "Python",
      ],
      description: "OpenVINO Asynchronous Inferencing with ANOMALIB",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://www.linkedin.com/pulse/openvino-asynchronous-inferencing-anomalib-jason-pua-njbsf/?trackingId=RYbCkhslAa4lDgfwzfmOHg%3D%3D",
      },
    },
    {
      title: "My still ongoing journey understanding GPT. Training a small bigram model on Intel CPU vs GPU",
      techStack: [
        "Intel Demo",
        "OneAPI",
        "OpenVINO",
        "Python",
        "CPU & GPU"
      ],
      description:
        "A little late to the party, paying self-attention and took some time off 😄.Worked on training a small and simple bigram language model on the transfomers architecture using Intel Extension for PyTorch.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://www.linkedin.com/pulse/my-still-ongoing-journey-understanding-gpt-training-intel-jason-pua/?trackingId=ewOH2UB1EyCHFf5LjsoBZQ%3D%3D",
      },
    },
    
  ],
} as const;
