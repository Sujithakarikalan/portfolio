export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}