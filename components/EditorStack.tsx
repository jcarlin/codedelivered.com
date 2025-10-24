'use client'

import { useState, useEffect } from 'react'
import { PYTHON_PACKAGES, JAVASCRIPT_PACKAGES } from '@/lib/constants'

type StackView = 'python' | 'javascript'

export default function EditorStack() {
  const [currentView, setCurrentView] = useState<StackView>('python')
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Rotate between views every 7 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentView((prev) => (prev === 'python' ? 'javascript' : 'python'))
        setIsVisible(true)
      }, 300) // Wait for fade out before switching
    }, 7000)

    return () => clearInterval(interval)
  }, [isPaused])

  // Initial fade in
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleTabClick = (view: StackView) => {
    if (view === currentView) return

    setIsPaused(true) // Stop auto-rotation when user manually clicks
    setIsVisible(false)
    setTimeout(() => {
      setCurrentView(view)
      setIsVisible(true)
    }, 300)
  }

  const filename = currentView === 'python' ? 'requirements.txt' : 'package.json'
  const packages = currentView === 'python' ? PYTHON_PACKAGES : JAVASCRIPT_PACKAGES

  return (
    <section id="stack" className="py-20 md:py-32 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What&apos;s in my <span className="text-gold">editor</span> right now
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto font-medium">
          A glimpse into the tools and frameworks I&apos;m actively working with
        </p>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Terminal Window */}
          <div className="bg-black rounded-lg shadow-2xl border border-green-500/20 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] border-b border-green-500/20 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 flex gap-2">
                <div
                  onClick={() => handleTabClick('python')}
                  className={`px-3 py-1 text-xs font-mono transition-colors cursor-pointer hover:text-green-300 ${
                    currentView === 'python'
                      ? 'bg-black text-green-400 border-b border-green-400'
                      : 'text-green-400/50'
                  }`}
                >
                  requirements.txt
                </div>
                <div
                  onClick={() => handleTabClick('javascript')}
                  className={`px-3 py-1 text-xs font-mono transition-colors cursor-pointer hover:text-green-300 ${
                    currentView === 'javascript'
                      ? 'bg-black text-green-400 border-b border-green-400'
                      : 'text-green-400/50'
                  }`}
                >
                  package.json
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="relative p-6 font-mono text-sm md:text-base overflow-x-auto min-h-[400px]">
              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>

              {/* Content */}
              <div
                className={`transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {currentView === 'python' ? (
                  <div className="space-y-1">
                    <div className="text-green-400/60 mb-3"># requirements.txt</div>
                    {packages.map((pkg, index) => (
                      <div key={index} className="text-green-400 hover:text-green-300 transition-colors">
                        <span className="text-green-300">{pkg.name}</span>
                        <span className="text-green-400/80">{pkg.version}</span>
                        <span className="text-green-400/50 ml-4"># {pkg.description}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="text-green-400/60 mb-1">{'{'}</div>
                    <div className="text-green-400/60 ml-4">&quot;dependencies&quot;: {'{'}</div>
                    {packages.map((pkg, index) => (
                      <div key={index} className="text-green-400 hover:text-green-300 transition-colors ml-8">
                        <span className="text-green-300">&quot;{pkg.name}&quot;</span>
                        <span className="text-green-400/80">: &quot;{pkg.version}&quot;</span>
                        {index < packages.length - 1 && ','}
                        <span className="text-green-400/50 ml-4">// {pkg.description}</span>
                      </div>
                    ))}
                    <div className="text-green-400/60 ml-4">{'}'}</div>
                    <div className="text-green-400/60">{'}'}</div>
                  </div>
                )}

                {/* Blinking cursor */}
                <div className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
