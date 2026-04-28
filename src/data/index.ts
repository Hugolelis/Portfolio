import type { Project, Skill } from '../types'

export const projects: Project[] = [
  { id: 1, titleKey: 'p1_title', tag: 'Python · FastAPI · PostgreSQL', descriptionKey: 'p1_desc', year: '2024' },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'backend' },
  { name: 'Node', category: 'backend' },
  { name: 'C++', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Docker', category: 'infra' },
  { name: 'Git', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'REST', category: 'tools' },
]
