export interface ExperienceProps {
  slug: string;
  title: string; 
}

export interface EducationProps {
  slug: string;
  title: string;
}
  
export interface SkillCategoryProps {
  slug: string;
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

export interface TypeProps {
  slug: string;
  title: string;
}

export interface TeammateProps {
  slug: string;
  name: string;
  url: string;
}

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
  startDate: string;
  endDate: string;
  codeUrl: string;
  projectUrl: string;
  experience?: string;
  education?: string;
  skillsToShow: number;
  skills: string[];
  files: FileProps[];
  type: TypeProps;
}

export interface ProjectProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
  startDate: string;
  endDate: string;
  codeUrl: string;
  projectUrl: string;
  experience: ExperienceProps;
  education: EducationProps;
  skillsToShow: number;
  skills: SkillProps[];
  files: FileProps[];
  type: TypeProps;
  teammates?: TeammateProps[]; 
}
