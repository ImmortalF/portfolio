import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function readSystemPref(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem('theme') as Theme | null
      return stored ?? readSystemPref()
    } catch {
      return readSystemPref()
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const setTheme = useCallback((t: Theme) => setThemeState(t), [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, setTheme, toggleTheme }
}
