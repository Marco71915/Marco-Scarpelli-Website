import { Project, Education, Experience, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: 'Marco Scarpelli',
  email: 'marcoscarpelli05@gmail.com',
  github: 'Marco71915',
  linkedin: 'marco-scarpelli-117207358',
  instagram: '_marcoscarpelli_',
  telegram: 'ssmm_50',
  location: 'Italy',
  tagline: 'Computer Engineering Student & Full-Stack Developer',
  bio: 'Currently in my third year of Computer Engineering at the University of Calabria. I am passionate about software engineering, algorithms, and digital solutions. Founder of Sframe, a digital solutions company serving over 150+ clients.'
};

export const PROJECTS: Project[] = [
  {
    name: "Electromagnetism Simulations",
    desc: "Collection of Matlab scripts for simulating and visualizing electric fields, potentials, and charge distributions in 2D and 3D. Includes custom visualizations and field intensity analysis.",
    year: "Nov 2024",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Electric_field_lines_positive_negative_charges.svg",
    link: "https://github.com/Marco71915/Elettromagnetismo.git",
    icon: "Zap",
    category: 'University'
  },
  {
    name: "Probabilistic Methods & Operations Research",
    desc: "Collection of original exercises and simulations covering probability, expected values, variance, stochastic processes, and operations research problems. Includes Excel, Word, PowerPoint, Matlab files, and video explanations.",
    year: "Dec 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Probability_tree_example.png",
    link: "https://github.com/Marco71915/Metodi-Probabilistici-e-Ricerca-Operativa.git",
    icon: "Calculator",
    category: 'University'
  },
  {
    name: "Fundamentals of Automatic Control",
    desc: "Design and analysis of a feedback control system. The project involves determining a simple controller C(s) to meet performance specifications, including ramp tracking error, resonance peak, and bandwidth constraints.",
    year: "Apr 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Traffic_camera_example.jpg",
    link: "https://github.com/Marco71915/Fondamenti-di-Automatica.git",
    icon: "Cpu",
    category: 'University'
  },
  {
    name: "Sframe – Smart NFC & QR Business Solutions",
    desc: "Created a complete smart-tag ecosystem for businesses by designing personalized NFC and QR plaques, cards, and keychains. Built NFC appointment cards using JSON data, Google Sheets automated with Apps Script, and custom HTML/CSS dashboards. Serving 150+ active clients.",
    year: "May 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/NFC_tag_example.jpg/640px-NFC_tag_example.jpg",
    link: "https://github.com/Marco71915/sframe-pages",
    icon: "QrCode",
    category: 'Personal'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor’s Degree in Computer Engineering (Ongoing)",
    institution: "University of Calabria",
    period: "2025 – Present",
    details: "Currently in the third year, studying software engineering, algorithms, electronics, automatic control, and applied mathematics."
  },
  {
    degree: "Professional Course in Marketing & E-Commerce",
    institution: "Professional Academy",
    period: "2025",
    details: "Focus on digital strategy, social media marketing, online sales funnels, and branding."
  },
  {
    degree: "High School Diploma in Applied Sciences",
    institution: "Liceo Scientifico",
    period: "2023",
    details: "Graduated with full marks: 100/100 cum laude."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Founder & Full-Stack Developer",
    company: "Sframe",
    period: "2025 – Present",
    description: "Founder of a digital solutions company providing smart NFC and QR products for businesses.",
    details: [
      "Designed and produced personalized smart plaques, cards, and keychains integrating NFC and QR-code technology.",
      "Developed dynamic landing pages, product catalogs, social link hubs, and review dashboards.",
      "Built using HTML, CSS, JavaScript, JSON, and Google Apps Script automations.",
      "Serving over 150+ active clients."
    ]
  },
  {
    role: "Freelance Web Developer & Digital Designer",
    company: "Self-employed",
    period: "2025 – Present",
    description: "Development of websites, landing pages, and custom digital solutions for small businesses.",
    details: [
      "Provided branding, design, and marketing consulting.",
      "Custom dashboard development and automation workflows."
    ]
  },
  {
    role: "Assistant to an Electronic Engineer",
    company: "Engineering Firm",
    period: "2023",
    description: "Collaborated on technical tasks and equipment management.",
    details: [
      "Technical documentation handling.",
      "Basic equipment testing and maintenance."
    ]
  },
  {
    role: "Volunteer",
    company: "Special Olympics Italy",
    period: "2018 – 2023",
    description: "Youth soccer coach and event staff member.",
    details: [
      "Assistant in national sports activities.",
      "Participated in the 'Fiamma' National Sports Committee."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "Java", "Matlab", "C", "JavaScript"]
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "Node.js"]
  },
  {
    category: "Automation & Tools",
    items: ["Google Apps Script", "JSON Workflows", "Git", "GitHub", "Linux", "NFC/QR Systems"]
  },
  {
    category: "Design & Media",
    items: ["Photoshop", "Illustrator", "Canva", "Premiere Pro", "CapCut"]
  }
];
