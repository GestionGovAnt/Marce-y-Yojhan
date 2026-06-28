import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg2)',
      padding: '2.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem' }}>
          Alex<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          © {year} {profile.name} — Diseñado y construido con React + Vite
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.82rem', color: 'var(--text-dim)', transition: 'color var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
          >LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.82rem', color: 'var(--text-dim)', transition: 'color var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
          >GitHub</a>
          <a href={`mailto:${profile.email}`}
            style={{ fontSize: '0.82rem', color: 'var(--text-dim)', transition: 'color var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
          >Email</a>
        </div>
      </div>
    </footer>
  )
}
