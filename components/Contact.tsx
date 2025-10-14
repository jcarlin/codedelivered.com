import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background snap-start">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Let&apos;s <span className="text-gold">Build Together</span>
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Have a project in mind? Get in touch and let&apos;s discuss how I can help.
        </p>

        <div className="glass-card p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
