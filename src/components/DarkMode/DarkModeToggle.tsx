import React from 'react'
import { DarkModeToggleWrapperStyled } from './DarkModeToggle.style'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import { toggleDarkMode } from '@/lib/slices/darkModeSlice';

export default function DarkModeToggle() {
  const [initial, setInitial] = React.useState<Boolean>(true)
  const mode = useAppSelector(state => state.darkMode.value)

  const dispatch = useAppDispatch()

  const toggleDarkModeApp = React.useCallback((newMode: 'dark' | 'light') => {
    dispatch(toggleDarkMode(newMode))
    if (newMode === 'dark') document.body.classList.add('dark-mode')
    else document.body.classList.remove('dark-mode')
  }, [])

  React.useEffect(() => {
    const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (mode === null || initial) {
      if (mode) toggleDarkModeApp(mode)
      else toggleDarkModeApp(darkModeMedia.matches ? 'dark' : 'light')
      setInitial(false)
    }

    darkModeMedia.addEventListener('change', e => toggleDarkModeApp(e.matches ? 'dark' : 'light'));
    return () => darkModeMedia.removeEventListener('change', () => {})
  }, []);

  return (
    <DarkModeToggleWrapperStyled data-testid='header-darkmode' $mode={mode} onClick={() => toggleDarkModeApp(mode === 'dark' ? 'light' : 'dark')} />
  )
}
