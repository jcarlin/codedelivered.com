'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    const honeypot = formData.get('botcheck')
    if (honeypot) {
      setFormState('error')
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
        setTimeout(() => setFormState('idle'), 5000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 5000)
      }
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="d1968a41-580f-4b49-b314-342cda941723" />
      <input type="hidden" name="subject" value="New Contact from CodeDelivered.com" />
      <input type="hidden" name="from_name" value="CodeDelivered Contact Form" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Jane Doe" />
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input type="email" id="email" name="email" required placeholder="jane@company.com" />
      </div>

      <div className="field">
        <label htmlFor="message">What are you building?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="A RAG platform over our internal docs, a customer-facing AI assistant, a full product rebuild…"
        />
      </div>

      <button type="submit" className="btn" disabled={formState === 'submitting'} style={{ width: '100%', justifyContent: 'center' }}>
        {formState === 'submitting' ? 'Sending…' : 'Send message'}
        {formState !== 'submitting' && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>

      {formState === 'success' && (
        <p style={{ color: 'var(--accent-text)', textAlign: 'center', marginTop: 12 }}>
          Thanks! We&rsquo;ll get back to you within one business day.
        </p>
      )}

      {formState === 'error' && (
        <p style={{ color: '#ff6b6b', textAlign: 'center', marginTop: 12 }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}
