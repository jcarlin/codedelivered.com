'use client'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
          AI Engineering & Full-Stack
          <br />
          <span className="text-gold">Development, Delivered</span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
          Building intelligent applications with cutting-edge AI, modern web technologies,
          and scalable cloud architecture
        </p>

        <button
          onClick={scrollToContact}
          className="btn-primary"
        >
          Get in Touch
        </button>
      </div>
    </section>
  )
}
