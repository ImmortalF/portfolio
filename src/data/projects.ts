import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Sample Project One',
    description: 'A small demo project showing UI + accessibility patterns.',
    technologies: ['React','TypeScript','Tailwind'],
    repoUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: 'project-2',
    title: 'Sample Project Two',
    description: 'Another example project showcasing responsive design.',
    technologies: ['Vite','React'],
    repoUrl: null,
    liveUrl: null,
    featured: false
  }
]
