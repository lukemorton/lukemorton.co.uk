const breakpoints = {
  mobile: '540px',
  tablet: '680px',
  desktop: '900px',
}

export default breakpoints

export const fromMobile = `only screen and (min-width: ${breakpoints.mobile})`
export const fromTablet = `only screen and (min-width: ${breakpoints.tablet})`
