import { useState, useEffect } from 'react'

const links = [
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all var(--transition)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em' }}>
          Marce<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-muted)',
                transition: 'color var(--transition)',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              padding: '8px 20px', borderRadius: '999px',
              background: 'var(--accent)', color: '#0a0a0a',
              fontSize: '0.88rem', fontWeight: 600,
              transition: 'background var(--transition), transform var(--transition)',
            }}
              onMouseEnter={e => { e.target.style.background = '#d4f85a'; e.target.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'scale(1)' }}
            >Contratar</a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
          className="hamburger"
          aria-label="Menú"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, background: 'var(--text)',
              borderRadius: 2, transition: 'all var(--transition)',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: 'block', marginTop: '1rem', padding: '12px', textAlign: 'center',
            background: 'var(--accent)', color: '#0a0a0a', borderRadius: 'var(--radius-sm)', fontWeight: 600,
          }}>Contratar</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
