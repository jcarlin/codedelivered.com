import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-14 md:pt-40 md:pb-22 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Let&apos;s <span className="text-gold">Build Together</span>
        </h2>
        <p className="text-text-secondary text-center mb-12">
          Have a project in mind? Get in touch and let&apos;s discuss how our team can help bring it to life.
        </p>

        <div className="glass-card p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
