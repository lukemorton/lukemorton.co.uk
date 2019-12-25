export default function () {
  if (typeof window !== 'undefined') {
    const media = window.matchMedia('(min-width: 60em)')
    return media.matches
  } else {
    return false
  }
}
