export interface ProjectProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
}

export interface SkillCategoryProps {
  title: string;
  color: string;
}

export interface SkillProps {
  slug: string;
  title: string;
  category: SkillCategoryProps;
  icon: string;
}

export interface FileProps {
  title: string;
  url: string;
  thumbnail: string;
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
  startDate: string;
  endDate: string;
  projects: string[];
  skillsToShow: number;
  skills: string[],
  files: FileProps[];
}

export interface ExperienceProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
  startDate: string;
  endDate: string;
  skillsToShow: number;
  skills: SkillProps[];
  files: FileProps[];
  projects: ProjectProps[];
}
