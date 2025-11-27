export default function Skills() {
    const skills = ['TypeScript', 'React', 'Tailwind', 'AWS']
    return (
        <section id="skills" className="w-full">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="font-heading text-2xl mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {skills.map(s => (
                        <span key={s} className="px-3 py-1 rounded bg-(--surface) text-(--text) text-sm shadow-sm">{s}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
