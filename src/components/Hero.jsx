import { useEffect, useRef } from 'react'
import { profile } from '../data'

const stats = [
  { value: '6+', label: 'Años de experiencia' },
  { value: '40+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes satisfechos' },
]

export default function Hero() {
  const headlineRef = useRef(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: '80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)',
      }} />

      {/* Accent glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '60%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(200,245,66,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
        {/* Availability badge */}
        {profile.available && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '2rem' }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)',
              boxShadow: '0 0 0 3px var(--accent-glow)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Disponible para nuevos proyectos
            </span>
          </div>
        )}

        {/* Headline */}
        <div ref={headlineRef}>
          <h1 style={{ marginBottom: '1.5rem', maxWidth: '800px' }}>
            Diseño y código que{' '}
            <span style={{
              color: 'var(--accent)',
              position: 'relative',
              display: 'inline-block',
            }}>
              convierte
              <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%' }} viewBox="0 0 200 8" preserveAspectRatio="none" height="6">
                <path d="M0 6 Q50 0 100 6 Q150 12 200 6" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            {' '}visitantes en clientes.
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {profile.bio}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: '999px',
              background: 'var(--accent)', color: '#0a0a0a', fontWeight: 600, fontSize: '0.95rem',
              transition: 'all var(--transition)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#d4f85a'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              Ver proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href={profile.cvUrl} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: '999px',
              background: 'transparent', color: 'var(--text)', fontWeight: 500, fontSize: '0.95rem',
              border: '1px solid var(--border)',
              transition: 'all var(--transition)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--bg2)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
            >
              Descargar CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--border)',
          border: '1px solid var(--border)', borderRadius: 'var(--radius)',
          overflow: 'hidden', marginTop: '5rem', maxWidth: 560,
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: 'var(--bg2)', padding: '1.2rem 1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.9rem', color: 'var(--text)', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: '3rem', color: 'var(--text-dim)' }}>
          <div style={{
            width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(200,245,66,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(200,245,66,0.1); }
        }
        @media (max-width: 600px) {
          .hero-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
