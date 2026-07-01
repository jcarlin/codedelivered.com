'use client'

import { useState, useEffect } from 'react'
import { PYTHON_PACKAGES, JAVASCRIPT_PACKAGES } from '@/lib/constants'

type StackView = 'python' | 'javascript'

export default function EditorStack() {
  const [currentView, setCurrentView] = useState<StackView>('python')
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentView((prev) => (prev === 'python' ? 'javascript' : 'python'))
        setIsVisible(true)
      }, 280)
    }, 7000)

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleTabClick = (view: StackView) => {
    if (view === currentView) return
    setIsPaused(true)
    setIsVisible(false)
    setTimeout(() => {
      setCurrentView(view)
      setIsVisible(true)
    }, 280)
  }

  const packages = currentView === 'python' ? PYTHON_PACKAGES : JAVASCRIPT_PACKAGES

  return (
    <section id="editor" className="reveal cd-section">
      <div className="wrap">
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '70ch' }}>
          <span className="eyebrow">Inside the workshop</span>
          <h2 className="sec-h">
            What&rsquo;s in our <span className="g">editor</span> right now
          </h2>
          <p className="sec-sub" style={{ marginInline: 'auto' }}>
            The real stack our engineers reach for every day — frontier-model tooling, type-safe web, and the infra that keeps it all running.
          </p>
        </div>

        <div
          className="editor-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="editor-bar">
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="etabs">
              <button
                type="button"
                className={'etab' + (currentView === 'python' ? ' on' : '')}
                onClick={() => handleTabClick('python')}
              >
                requirements.txt
              </button>
              <button
                type="button"
                className={'etab' + (currentView === 'javascript' ? ' on' : '')}
                onClick={() => handleTabClick('javascript')}
              >
                package.json
              </button>
            </div>
          </div>

          <div
            className="ecode"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.28s ease',
            }}
          >
            {currentView === 'python' ? (
              <>
                <div className="ln">
                  <span className="gut"></span>
                  <span className="c"># requirements.txt</span>
                </div>
                <div className="ln">
                  <span className="gut"></span>
                  <span> </span>
                </div>
                {packages.map((pkg, i) => (
                  <div className="ln" key={i}>
                    <span className="gut">{i + 1}</span>
                    <span>
                      <span className="k">{pkg.name}</span>
                      <span className="v">{pkg.version}</span>
                      {'  '}
                      <span className="c"># {pkg.description}</span>
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="ln">
                  <span className="gut"></span>
                  <span className="p">{'{'}</span>
                </div>
                <div className="ln">
                  <span className="gut"></span>
                  <span>
                    {'  '}
                    <span className="k">&quot;dependencies&quot;</span>: {'{'}
                  </span>
                </div>
                {packages.map((pkg, i) => (
                  <div className="ln" key={i}>
                    <span className="gut">{i + 1}</span>
                    <span>
                      {'    '}
                      <span className="k">&quot;{pkg.name}&quot;</span>:{' '}
                      <span className="v">&quot;{pkg.version}&quot;</span>
                      {i < packages.length - 1 ? ',' : ''}
                      {'  '}
                      <span className="c">{`// ${pkg.description}`}</span>
                    </span>
                  </div>
                ))}
                <div className="ln">
                  <span className="gut"></span>
                  <span>{'  }'}</span>
                </div>
                <div className="ln">
                  <span className="gut"></span>
                  <span className="p">{'}'}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
