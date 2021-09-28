import { createTheme, ThemeProvider } from '@mui/material'
import { Theme } from '@mui/system'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Convenience method for specifying a different style in SX props when dark mode is active.
 * @param dark The value to use during dark mode.
 * @param light The value to use during light mode (default mode).
 * @returns A function for use in a MUI sx prop.
 */
export function ifDarkMode<T, U>(dark: T, light: U): (theme: Theme) => T | U {
  return (theme: Theme) => theme.palette.mode === 'dark' ? dark : light
}

/**
 * The dark mode state and a function to enable/disable dark mode.
 */
export interface DarkModeContext {
  /**
   * Whether dark mode is currently active.
   */
  darkMode: boolean,

  /**
   * Enables (or disables) dark mode.
   * @param darkMode Enable dark mode?
   */
  setDarkMode: (darkMode: boolean) => void,
}

const CONTEXT = createContext<DarkModeContext>(null)

/**
 * This component defines a MUI theme with dark mode support for child components.
 * @param props.children The component(s) to render with the theme.
 */
export function DarkModeProvider(props: {
  children: React.ReactNode,
}) {
  const [darkMode, setDarkMode] = useState(loadDarkMode)

  // persist dark mode setting
  useEffect(() => saveDarkMode(darkMode), [darkMode])

  // cache light and dark themes
  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            // fullscreen
            'html, body, #app': {
              height: '100%',
            },
          },
        },
      },
    }),
    [darkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CONTEXT.Provider value={{ darkMode, setDarkMode }}>
        {props.children}
      </CONTEXT.Provider>
    </ThemeProvider>
  )
}

/**
 * A React hook for the current dark mode state.
 * @returns The dark mode context.
 */
export function useDarkMode(): DarkModeContext {
  const context = useContext(CONTEXT)
  if (!context) {
    throw new Error('useDarkMode requires a <DarkModeProvider> ancestor')
  }
  return context
}

const DARK_MODE_KEY = 'darkMode'

function loadDarkMode(): boolean {
  const darkMode = window.localStorage.getItem(DARK_MODE_KEY)
  if (darkMode === "true") {
    return true
  } else if (darkMode === "false") {
    return false
  } else if (darkMode !== null) {
    console.warn("unknown dark mode: " + darkMode)
  }
  // fallback to CSS media query
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function saveDarkMode(darkMode: boolean) {
  window.localStorage.setItem(DARK_MODE_KEY, darkMode ? "true" : "false")
}
