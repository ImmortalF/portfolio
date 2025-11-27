export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  repoUrl?: string | null
  liveUrl?: string | null
  featured?: boolean
}

export interface ContactRequest {
  name: string
  email: string
  message: string
  date?: string
}
