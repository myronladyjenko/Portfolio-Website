export type WorkType = 'co-op' | 'full-time' | 'contract' | 'internship';

export type WorkLocation = 'remote' | 'hybrid' | 'onsite';

export interface ReportSection {
  title: string;
  content: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export interface WorkTermReport {
  id: string;
  company: string;
  position: string;
  workType: WorkType;
  location: WorkLocation;
  term: string;
  date: string;
  sections: ReportSection[];
  technologies: string[];
  thumbnail: string;
} 