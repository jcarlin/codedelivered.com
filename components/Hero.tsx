'use client'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative flex items-center justify-center overflow-hidden snap-start snap-always" style={{ minHeight: 'calc(100vh - 1.75rem)' }}>
      {/* Full-screen window overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
          AI Engineering & Full-Stack
          <br />
          <span className="text-gold">Development, Delivered</span>
        </h1>

        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Building intelligent, scalable applications with cutting-edge AI and modern cloud architecture
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
