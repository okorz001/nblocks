import { createTheme, ThemeProvider } from '@mui/material'
import { Theme } from '@mui/system'
import { createContext, useMemo, useState } from 'react'

/**
 * Local storage key for dark mode setting.
 */
const DARK_MODE_KEY = 'darkMode'

/**
 * Load dark mode setting from local storage. Falls back to CSS media query if setting has never been set.
 * @returns Saved dark mode setting.
 */
function loadDarkMode(): boolean {
  const darkMode = window.localStorage.getItem(DARK_MODE_KEY)
  if (darkMode === "true") {
    return true
  } else if (darkMode === "false") {
    return false
  } else if (darkMode !== null) {
    console.warn("unknown dark mode: " + darkMode)
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Saves the dark mode setting to local storage.
 * @param darkMode The current dark mode setting.
 */
function saveDarkMode(darkMode: boolean) {
  window.localStorage.setItem(DARK_MODE_KEY, darkMode ? "true" : "false")
}

/**
 * React context containing the dark mode state and a function to enable/disable dark mode.
 */
export const DarkModeContext = createContext<{
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void,
}>({
  darkMode: false,
  setDarkMode: () => {},
})

/**
 * Convenience method for specifying a different style when dark mode is active.
 * @param dark The value to use during dark mode.
 * @param light The value to use during light mode (default mode).
 * @returns A function for use in a MUI sx prop.
 */
export function ifDarkMode<T, U>(dark: T, light: U): (theme: Theme) => T | U {
  return (theme: Theme) => theme.palette.mode === 'dark' ? dark : light
}

/**
 * This component adds dark mode support to child components.
 * @param props.children The component(s) to render with the theme.
 */
export default function DarkMode(props: {
  children: React.ReactNode,
}) {
  const [darkMode, setDarkMode] = useState(loadDarkMode)

  // cache light and dark themes
  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    }),
    [darkMode]
  )

  const context = {
    darkMode,
    setDarkMode: (darkMode: boolean) => {
      // update react state
      setDarkMode(darkMode)
      // update local storage
      saveDarkMode(darkMode)
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <DarkModeContext.Provider value={context}>
        {props.children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  )
}
