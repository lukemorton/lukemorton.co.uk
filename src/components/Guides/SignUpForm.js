import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Form, EmailField, Buttonset, SubmitButton } from 'ui'

export default () => {
  const { register, formState, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
  })
  const formRef = useRef()
  const nativeSubmit = () =>
    new Promise(() => {
      formRef.current.submit()
    })

  return (
    <Form
      action="https://upscri.be/chbfps"
      method="post"
      noValidate
      onSubmit={handleSubmit(nativeSubmit)}
      ref={formRef}
    >
      <EmailField
        error={errors.email}
        hint="I'll only use this to send you guide updates"
        ref={register({
          maxLength: 256,
          pattern: /^[^@\s]+@[^@\s]+$/,
          required: true,
        })}
      />

      <Buttonset>
        <SubmitButton
          text="Sign up"
          disabled={formState.isSubmitting}
          disabledText="Signing up..."
        />
      </Buttonset>
    </Form>
  )
}
