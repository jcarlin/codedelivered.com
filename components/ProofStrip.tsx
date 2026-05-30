import { METRICS } from '@/lib/constants'

export default function ProofStrip() {
  return (
    <div className="proof">
      <div className="wrap">
        {METRICS.map((m, i) => (
          <div className="cell" key={i}>
            <div className="n">{m.n}</div>
            <div className="l">{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
