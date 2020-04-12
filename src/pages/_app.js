import withCommonProps from 'src/hocs/withCommonProps'

export default ({ Component, pageProps }) => {
  const ComponentWithCommonProps = withCommonProps(Component)
  return <ComponentWithCommonProps {...pageProps} />
}
