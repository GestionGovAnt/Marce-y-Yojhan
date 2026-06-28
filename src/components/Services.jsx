import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <span className="section-label">Servicios</span>
        <h2 style={{ marginBottom: '3.5rem', maxWidth: 520 }}>
          Lo que puedo hacer por tu proyecto.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--bg3)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                {svc.icon}
              </div>

              <h3 style={{ fontSize: '1.05rem' }}>{svc.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, flex: 1 }}>
                {svc.description}
              </p>

              {/* Checklist */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                {svc.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    <span style={{
                      width: 16, height: 16, borderRadius: 4,
                      background: 'var(--accent-glow)', border: '1px solid var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5l3 3 5-5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA center */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            ¿Tienes un proyecto en mente? Cuéntame los detalles.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: '999px',
            background: 'var(--accent)', color: '#0a0a0a', fontWeight: 600,
            transition: 'all var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4f85a'; e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
