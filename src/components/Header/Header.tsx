import ThemeToggle from "../ThemeToggle/ThemeToggle"

export default function Header() {
    return (
        <header className="w-full bg-transparent">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="font-heading text-xl">Ruslan Balkovyy</a>
                <nav className="hidden md:flex gap-6 items-center text-sm text-(--muted)">
                    <a href="#projects" className="hover:text-(--text)">Projects</a>
                    <a href="#skills" className="hover:text-(--text)">Skills</a>
                    <a href="#contact" className="hover:text-(--text)">Contact</a>
                    <ThemeToggle></ThemeToggle>
                </nav>
            </div>
        </header >
    )
}
