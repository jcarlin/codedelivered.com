'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot spam protection - if filled, it's a bot
    const honeypot = formData.get('botcheck')
    if (honeypot) {
      setFormState('error')
      return
    }

    try {
      // Using Web3Forms - free form backend with built-in spam protection
      // Get your access key at https://web3forms.com
      // Features: Email delivery, spam filtering, IP rate limiting
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
    } catch (error) {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms Configuration */}
      <input type="hidden" name="access_key" value="d1968a41-580f-4b49-b314-342cda941723" />
      <input type="hidden" name="subject" value="New Contact from CodeDelivered.com" />
      <input type="hidden" name="from_name" value="CodeDelivered Contact Form" />

      {/* Honeypot spam protection - hidden field that bots fill but humans don't see */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-gold/50 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-gold/50 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:outline-none focus:border-gold/50 transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {formState === 'success' && (
        <p className="text-gold text-center">Thanks! I&apos;ll get back to you within 24 hours.</p>
      )}

      {formState === 'error' && (
        <p className="text-red-500 text-center">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  )
}
