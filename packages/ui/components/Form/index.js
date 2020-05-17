import { forwardRef } from 'react'

export const Form = forwardRef((props, ref) => (
  <>
    <style jsx>{`
      form {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0 auto;
        max-width: 30em;
        text-rendering: optimizelegibility;
      }
    `}</style>
    <form {...props} ref={ref} />
  </>
))

export const Fieldset = ({ hasError, children }) => (
  <>
    <style jsx>{`
      .fieldset {
        border-left: 3px solid transparent;
        margin-bottom: 1em;
        padding: 0 1em;
      }

      .fieldset.hasError {
        border-left: 3px solid red;
      }
    `}</style>
    <div className={hasError ? 'fieldset hasError' : 'fieldset'}>
      {children}
    </div>
  </>
)

export const EmailField = forwardRef(({ error, hint }, ref) => {
  const hasError = !!error
  const isRequiredError = hasError && error.type === 'required'
  const isEmailFormatError = hasError && error.type !== 'required'

  return (
    <Fieldset hasError={hasError}>
      <style jsx>{`
        label[for],
        input[type='email'] {
          font-size: 1.1em;
          line-height: 1.25;
        }

        label[for] {
          font-weight: bold;
        }

        label[for],
        .hint,
        .error {
          display: block;
        }

        .hint {
          color: #666;
          margin-bottom: 0.5em;
        }

        .error {
          color: red;
          font-weight: bold;
          margin-bottom: 0.5em;
          margin-top: -0.5em;
        }

        input[type='email'] {
          border: 2px solid #ccc;
          border-radius: 0.3em;
          padding: 0.8em 1em;
          width: 100%;
        }

        input[type='email'].hasError {
          border-color: red;
        }
      `}</style>

      <label htmlFor="email">Email address</label>

      <span className="hint">{hint}</span>

      {isRequiredError && (
        <span className="error">Enter your email address</span>
      )}

      {isEmailFormatError && (
        <span className="error">
          Enter an email address in the correct format, like
          yourname@example.com
        </span>
      )}

      <input
        type="email"
        name="email"
        id="email"
        className={hasError ? 'hasError' : ''}
        placeholder="yourname@example.com"
        spellcheck="false"
        autocomplete="email"
        ref={ref}
      />
    </Fieldset>
  )
})

export const Buttonset = ({ children }) => (
  <>
    <style jsx>{`
      .buttons {
        padding: 0 1em;
      }
    `}</style>
    <div className="buttons">{children}</div>
  </>
)

export const SubmitButton = ({ text, disabled, disabledText }) => (
  <>
    <style jsx>{`
      button[type='submit'] {
        background: hsl(163, 100%, 47%);
        border: 0;
        border-top: 1px solid hsl(163, 100%, 90%);
        border-bottom: 1px solid hsl(163, 100%, 40%);
        border-radius: 0.3em;
        color: #fff;
        font-size: 1.1em;
        font-weight: bold;
        line-height: 1.25;
        margin-bottom: 2em;
        padding: 0.8em 1em;
        transition: background 0.3s ease-out;
        width: 100%;
      }

      button[type='submit']:hover {
        background: hsl(163, 100%, 50%);
      }

      button[type='submit']:disabled {
        background: hsl(163, 0%, 50%);
        border-top: 1px solid hsl(163, 0%, 50%);
        border-bottom: 1px solid hsl(163, 0%, 50%);
      }
    `}</style>
    <button type="submit" disabled={disabled}>
      {disabled ? disabledText : text}
    </button>
  </>
)
