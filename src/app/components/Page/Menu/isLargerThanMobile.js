import columnLayoutBreakpoint from '../columnLayoutBreakpoint'

export default function () {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const media = window.matchMedia(columnLayoutBreakpoint)
    return media.matches
  } else {
    return false
  }
}
