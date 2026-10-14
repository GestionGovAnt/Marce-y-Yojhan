import { brand, getProfileLinks, team } from '../data/team'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#inicio" aria-label={`${brand.name}, volver al inicio`}>
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span>{brand.name}</span>
        </a>
        <p>© {new Date().getFullYear()} {brand.name}.</p>
        <div className="footer-links">
          {team.flatMap(profile =>
            getProfileLinks(profile)
              .filter(link => link.label === 'GitHub' || link.label === 'LinkedIn')
              .map(link => (
                <a key={`${profile.id}-${link.label}`} href={link.href} target="_blank" rel="noopener noreferrer">
                  {profile.name} · {link.label}
                </a>
              )),
          )}
        </div>
      </div>
    </footer>
  )
}
