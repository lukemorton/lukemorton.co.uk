export default function () {
  const factory = process.env.FACTORY

  switch (factory) {
    case 'build':
      return import('../build/factory')

    case 'app':
    default:
      return import('./factory')
  }
}
