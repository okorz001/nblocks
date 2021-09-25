/**
 * The name of the CSS variable with the window's inner height.
 */
const INNER_HEIGHT_VAR = '--inner-height'

/**
 * Updates the CSS variable with the window's inner height.
 */
export function updateInnerHeight() {
  document.documentElement.style.setProperty(INNER_HEIGHT_VAR, `${window.innerHeight}px`)
}

/**
 * Initializes the CSS variable and registers an event listener to update on window resize.
 */
export function initInnerHeight() {
  updateInnerHeight()
  window.addEventListener('resize', updateInnerHeight)
}

/**
 * Returns the CSS expression for the window's inner height.
 * @returns A CSS expression
 */
export default function innerHeight() {
  return `var(${INNER_HEIGHT_VAR}, 100vh)`
}
