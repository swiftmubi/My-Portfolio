import { useState } from 'react'
import Icon from '../Icon.jsx'

const initialState = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.email.trim()) next.email = 'Enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Enter a message.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('sending')
    // Wire this up to your backend / form service of choice (e.g. Formspree, n8n webhook).
    setTimeout(() => {
      setStatus('sent')
      setForm(initialState)
    }, 900)
  }

  if (status === 'sent') {
    return (
      <div className="panel p-8 sm:p-10 flex flex-col items-center text-center gap-3">
        <div className="h-12 w-12 rounded-full bg-surface-hover border border-line grid place-items-center">
          <Icon name="check" size={20} className="text-signal" />
        </div>
        <h3 className="text-lg font-bold">Message sent</h3>
        <p className="text-sm text-ink-dim max-w-xs">
          Thanks for reaching out — I'll get back to you as soon as possible.
        </p>
        <button className="btn-ghost mt-3" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="panel p-6 sm:p-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div>
        <span className="eyebrow">Send a Message</span>
        <h3 className="text-xl font-bold tracking-tight mt-2">Let's build something</h3>
      </div>

      <Field label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Your full name" />
      <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
      <TextArea label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} placeholder="Tell me a bit about your project or opportunity…" />

      <button type="submit" className="btn-primary justify-center mt-1" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : (
          <>
            Send Message
            <Icon name="send" size={14} />
          </>
        )}
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium text-ink-dim">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-surface-hover border rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors ${
          error ? 'border-red-400/50' : 'border-line-strong focus:border-silver'
        }`}
        aria-invalid={!!error}
      />
      {error && <span className="text-xs text-red-300/80">{error}</span>}
    </label>
  )
}

function TextArea({ label, name, value, onChange, error, placeholder }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium text-ink-dim">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className={`bg-surface-hover border rounded-lg px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none resize-none transition-colors ${
          error ? 'border-red-400/50' : 'border-line-strong focus:border-silver'
        }`}
        aria-invalid={!!error}
      />
      {error && <span className="text-xs text-red-300/80">{error}</span>}
    </label>
  )
}
