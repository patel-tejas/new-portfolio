// hooks/useThemeSwitcher.js
"use client"

import { useEffect, useState } from 'react'

export default function useThemeSwitcher() {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    // Get theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme')
    
    if (storedTheme) {
      setMode(storedTheme)
      applyTheme(storedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
      applyTheme('dark')
    }
  }, [])

  const applyTheme = (theme) => {
    const root = document.documentElement
    
    // Remove both classes
    root.classList.remove('light', 'dark')
    
    // Add the current theme class
    root.classList.add(theme)
    
    // Store in localStorage
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    applyTheme(newMode)
  }

  return [mode, toggleTheme]
}