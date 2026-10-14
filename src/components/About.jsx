import { getProfileLinks, team } from '../data/team'

function ProfileLinks({ profile }) {
  const links = getProfileLinks(profile)
  if (!links.length) return null

  return (
    <div className="profile-links" aria-label={`Enlaces de ${profile.name}`}>
      {links.map(link => {
        const external = link.href.startsWith('https://')
        return (
          <a
            className="text-link"
            href={link.href}
            download={link.label === 'Hoja de vida' ? 'Yojhan-Arias-Correa-CV.pdf' : undefined}
            key={link.label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            {link.label}{external && <span aria-hidden="true"> ↗</span>}
          </a>
        )
      })}
    </div>
  )
}

function ProfileSection({ title, values, emptyText }) {
  return (
    <div className="profile-detail">
      <h4>{title}</h4>
      {values.length ? (
        <ul className="detail-list">
          {values.map(value => <li key={value}>{value}</li>)}
        </ul>
      ) : (
        <p className="muted">{emptyText}</p>
      )}
    </div>
  )
}

function ProfileCard({ profile, index }) {
  const isInPreparation = profile.id === 'marcela'

  return (
    <article className={`profile-card${index % 2 ? ' profile-card-alt' : ''}`}>
      <div className="profile-top">
        <div className="avatar-frame">
          {profile.photo ? (
            <img src={profile.photo} alt={`Fotografía de ${profile.name}`} loading="lazy" />
          ) : (
            <span className="avatar-monogram" aria-label={`Espacio neutro para la fotografía de ${profile.name}`}>
              {profile.name.charAt(0)}
            </span>
          )}
          <span className="avatar-orbit" aria-hidden="true" />
        </div>
        <div className="profile-heading">
          <p className="eyebrow">{isInPreparation ? 'Perfil en preparación' : 'Perfil profesional'}</p>
          <h3>{profile.name}</h3>
          <p className="profile-role">{profile.role || 'Título profesional pendiente'}</p>
        </div>
      </div>

      <p className="profile-introduction">
        {profile.introduction || 'Perfil profesional en preparación.'}
      </p>

      <div className="profile-details">
        <ProfileSection
          title="Formación académica"
          values={profile.education}
          emptyText="Formación pendiente de completar."
        />
        <ProfileSection
          title="Habilidades y tecnologías"
          values={profile.skills}
          emptyText="Habilidades pendientes de completar."
        />
        <ProfileSection
          title="Experiencia laboral"
          values={profile.experience}
          emptyText="Experiencia pendiente de completar."
        />
        <ProfileSection
          title="Proyectos"
          values={profile.projects.map(project => project.title)}
          emptyText="Sección preparada para añadir proyectos."
        />
        <ProfileSection
          title="Certificaciones"
          values={profile.certifications}
          emptyText="Certificaciones pendientes de completar."
        />
      </div>

      <ProfileLinks profile={profile} />
    </article>
  )
}

export default function About() {
  return (
    <section id="equipo" className="section team-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">El equipo</p>
            <h2>Dos perfiles, un espacio compartido.</h2>
          </div>
          <p className="section-intro">
            Cada perfil conserva su propia trayectoria. La información aún no disponible se deja claramente pendiente.
          </p>
        </div>
        <div className="profile-grid">
          {team.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
