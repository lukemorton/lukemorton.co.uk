import OpenSource from '../src/app/components/OpenSource'
import withCommonProps from '../src/app/hocs/withCommonProps'

export default withCommonProps(OpenSource)

export const getStaticProps = async () => {
  const { projects } = await import('../content/open-source')
  return { props: { projects } }
}
