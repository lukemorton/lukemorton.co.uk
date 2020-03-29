const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

export default breakpoints

export const minWidth = (mw) => `only screen and (min-width: ${mw})`
export const maxWidth = (mw) => `only screen and (max-width: ${mw})`

export const fromSmall = minWidth(breakpoints.sm)
export const fromMedium = minWidth(breakpoints.md)
export const fromLarge = minWidth(breakpoints.lg)
export const fromExtraLarge = minWidth(breakpoints.xl)
