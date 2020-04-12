import OpenSource from 'src/components/OpenSource'

export default OpenSource

export const getStaticProps = async () => {
  const { projects } = await import('../content/open-source')
  return { props: { projects } }
}
