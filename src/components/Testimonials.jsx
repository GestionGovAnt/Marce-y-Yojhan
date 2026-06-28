import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <span className="section-label">Testimonios</span>
        <h2 style={{ marginBottom: '3.5rem', maxWidth: 480 }}>Lo que dicen quienes han trabajado conmigo.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map(t => (
            <blockquote
              key={t.id}
              style={{
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                margin: 0,
                transition: 'border-color var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = t.color + '44'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: t.color, fontSize: '0.9rem' }}>★</span>
                ))}
              </div>

              {/* Quote mark */}
              <p style={{
                fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.75,
                fontStyle: 'italic', flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <footer style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: t.color + '22', border: `1px solid ${t.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem',
                  color: t.color, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '2rem', marginTop: '4rem', flexWrap: 'wrap',
        }}>
          {['React Expert', 'Vercel Partner', 'Figma Certified', 'AWS Associate'].map(badge => (
            <div key={badge} className="chip chip--accent">{badge}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
