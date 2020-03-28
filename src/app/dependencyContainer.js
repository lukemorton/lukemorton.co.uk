export default function (factory) {
  switch (factory || process.env.FACTORY) {
    case 'build':
      return import('../build/factory')

    case 'app':
    default:
      return import('./factory')
  }
}
