import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function ProjectsList() {
    return (
        <section id="projects" className="w-full">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="font-heading text-2xl mb-6">Projects</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    )
}
