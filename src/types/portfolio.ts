export interface Link {
  label: string
  url: string
}

export interface Profile {
  name: string
  shortName: string
  footerName: string
  logoText: string
  greeting: string
  role: string
  summary: string
  about: string
  contactHeading: string
  contactText: string
  repositoryIntro: string
  codeProfile: {
    name: string
    builds: string[]
    mindset: string
  }
  email: string
  phone: string
  location: string
  availability: string
  resumeUrl: string
  heroTech: string[]
}

export interface Stat {
  label: string
  value: string
  icon: string
}

export interface SkillGroup {
  title: string
  icon: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  shortDescription: string
  description: string
  techStack: string[]
  highlights: string[]
  githubUrl: string
  liveUrl?: string
  caseStudyUrl?: string
  featured: boolean
  status: 'Live' | 'In progress' | 'Completed'
}

export interface ExperienceItem {
  role: string
  company: string
  duration: string
  location: string
  description: string
  highlights: string[]
  techStack: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  duration: string
  cgpa: string
  scoreLabel: string
  coursework: string[]
}

export type SectionKey =
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'achievements'
  | 'certifications'
  | 'contact'

export interface NavigationItem {
  label: string
  href: string
  section?: SectionKey
}

export interface Achievement {
  platform: string
  result: string
  detail: string
  url?: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
  credentialId?: string
  certificateUrl?: string
  verificationUrl?: string
  credentialUrl?: string
}

export interface Repository {
  name: string
  description: string
  language: string
  url: string
}
