import { useState } from 'react'
import { brand, team } from '../data/team'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Equipo', href: '#equipo' },
  ...(team.some(profile => profile.projects.length)
    ? [{ label: 'Proyectos', href: '#proyectos' }]
    : []),
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label={`${brand.name}, inicio`}>
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span>{brand.name}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
        </button>

        <ul id="site-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="#equipo" onClick={() => setMenuOpen(false)}>
              Conócenos <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
