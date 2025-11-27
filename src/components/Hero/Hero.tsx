export default function Hero() {
    return (
        <section id="hero" className="w-full">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h1 className="font-heading text-4xl md:text-6xl mb-4">Hi, I'm Ruslan</h1>
                <p className="text-lg text-(--muted) max-w-2xl mx-auto">I build accessible, minimal web interfaces and enjoy learning new front-end patterns.</p>
                <div className="mt-8 flex justify-center gap-4">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="/resume.pdf" className="btn btn-outline">Download Resume</a>
                </div>
            </div>
        </section>
    )
}
