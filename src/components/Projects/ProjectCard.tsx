import type { Project } from '../../types'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="border rounded p-4 shadow-sm">
            <h3 className="font-heading text-lg mb-1">{project.title}</h3>
            <p className="text-sm text-(--muted) mb-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap text-xs">
                {project.technologies.map(t => <span key={t} className="px-2 py-1 bg-(--surface) rounded">{t}</span>)}
            </div>
        </article>
    )
}
