import OpenSource from 'src/components/OpenSource'
import withCommonProps from 'src/hocs/withCommonProps'

export default withCommonProps(OpenSource)

export const getStaticProps = async () => {
  const { projects } = await import('../content/open-source')
  return { props: { projects } }
}
