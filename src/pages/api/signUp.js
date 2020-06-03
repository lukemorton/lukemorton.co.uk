import fetch from 'cross-fetch'

export default async (req, res) => {
  const email = req.body.email
  console.log('SignUp', email)

  await fetch(process.env.SIGN_UP_HOOK, {
    method: 'POST',
    body: JSON.stringify({ email }),
  })

  res.status(301)
  res.setHeader('Location', '/guides/sign-up-successful')
  res.end()
}
