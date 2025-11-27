import { Sun, Moon } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

type Props = {
    className?: string
}

export default function ThemeToggle({ className = '' }: Props) {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            type="button"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            onClick={toggleTheme}
            className={`rounded-full p-2 shadow-md cursor-pointer transition-all ease-in-out focus:outline-none ${className}`}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    )
}
