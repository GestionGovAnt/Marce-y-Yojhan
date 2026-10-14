import { brand, team } from '../data/team'

export default function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow"><span /> {brand.provisional ? 'Identidad visual provisional' : 'Portafolio colaborativo'}</p>
        <h1>
          Ingeniería y tecnología,
          <span> presentadas con claridad.</span>
        </h1>
        <p className="hero-copy">
          Un espacio compartido para conocer los perfiles y proyectos de cada integrante.
          La información se muestra solo cuando está disponible y confirmada.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#equipo">
            Conocer al equipo <span aria-hidden="true">↘</span>
          </a>
          {team.some(profile => profile.projects.length) && (
            <a className="button button-secondary" href="#proyectos">
              Explorar proyectos <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <div className="hero-roster" aria-label="Integrantes del portafolio">
          {team.map(profile => (
            <div className="roster-item" key={profile.id}>
              <span className="roster-initial" aria-hidden="true">{profile.name.charAt(0)}</span>
              <span>
                <strong>{profile.name}</strong>
                <small>{profile.role || 'Perfil profesional en preparación'}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
    </section>
  )
}
