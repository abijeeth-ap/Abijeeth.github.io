import type { Link } from '../types/portfolio'
import { profile } from './profile'

export const socialLinks: Link[] = [
  { label: 'Email', url: `mailto:${profile.email}` },
]
