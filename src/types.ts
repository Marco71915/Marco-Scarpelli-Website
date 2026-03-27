export interface Project {
  name: string;
  desc: string;
  year: string;
  img: string;
  link: string;
  icon: string;
  category: 'University' | 'Personal';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
