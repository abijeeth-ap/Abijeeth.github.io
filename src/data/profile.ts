import type { Profile, Stat } from '../types/portfolio'

export const profile: Profile = {
  name: 'Abijeeth A P',
  shortName: 'Abijeeth',
  footerName: 'Abijeeth A P',
  logoText: 'AAP',
  greeting: "Hi, I'm",
  role: 'Aspiring Game Developer',
  summary:
    'B.E. Computer Science and Engineering student building a strong foundation in programming, with a growing focus on game development using tools like Unity and Unreal Engine.',
  about:
    'Aspiring game developer with a strong foundation in programming and a passion for creating immersive gaming experiences, eager to learn and build using tools like Unity and Unreal Engine.',
  contactHeading: "Let's build something together",
  contactText: "Open to internships and collaborative projects — feel free to reach out.",
  repositoryIntro: 'A few of the repositories I have been working on and learning from.',
  codeProfile: {
    name: 'Abijeeth A P',
    builds: ['games', 'tools', 'interfaces'],
    mindset: 'always learning',
  },
  email: 'apabijeeth@gmail.com',
  phone: '+91 8903580046',
  location: 'Poottety, Kanyakumari',
  availability: 'Open to opportunities',
  resumeUrl: '/resume/Abijeeth-AP-Resume.pdf',
  heroTech: ['C', 'Java', 'UI/UX Basics', 'Unity', 'Unreal Engine'],
}

export const stats: Stat[] = [
  { label: 'CGPA', value: '8.04 (upto IV semester)', icon: '◆' },
  { label: 'Languages', value: 'C, Java', icon: '</>' },
  { label: 'Certifications', value: '8 completed', icon: '✦' },
  { label: 'Focus', value: 'Game Development', icon: '◇' },
  { label: 'Languages Spoken', value: 'English, Tamil', icon: '✓' },
]
