export default function () {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const media = window.matchMedia('(min-width: 60em)')
    return media.matches
  } else {
    return false
  }
}
