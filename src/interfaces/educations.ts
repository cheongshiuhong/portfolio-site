export interface ProjectProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
}

export interface FileProps {
  title: string;
  url: string;
  thumbnail: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
  startDate: string;
  endDate: string;
  url: string;
  files: FileProps[];
}

export interface EducationProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkModeImage?: string;
  startDate: string;
  endDate: string;
  url: string;
  files: FileProps[];
  projects: ProjectProps[];
}