import { team } from '../data/team'

const projects = team.flatMap(profile =>
  profile.projects.map(project => ({ ...project, owner: profile.name })),
)

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card${index % 2 ? ' project-card-alt' : ''}`}>
      <div className="project-visual" aria-hidden="true">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-glyph">{index % 2 ? '↗' : '⌘'}</span>
        <span className="project-lines" />
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.owner} <span className="status-label">{project.status}</span></p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-solution">{project.solution}</p>

        {project.features.length > 0 && (
          <div className="project-features">
            <h4>Alcance descrito</h4>
            <ul>
              {project.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        )}

        {project.technologies.length > 0 && (
          <div className="chip-list" aria-label="Tecnologías y áreas">
            {project.technologies.map(technology => (
              <span className="chip" key={technology}>{technology}</span>
            ))}
          </div>
        )}

        {(project.repository || project.demo) && (
          <div className="project-links">
            {project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">Repositorio ↗</a>}
            {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Ver demostración ↗</a>}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Proyectos y casos de estudio</p>
            <h2>Trabajo técnico, con contexto.</h2>
          </div>
          <p className="section-intro">
            Las tecnologías y funcionalidades se describen según la información disponible; los detalles por verificar están indicados.
          </p>
        </div>
        {projects.length ? (
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.owner}-${project.id}`} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-mark" aria-hidden="true">＋</span>
            <h3>Proyectos en preparación</h3>
            <p>Esta sección está lista para presentar proyectos cuando se añadan al archivo de configuración.</p>
          </div>
        )}
      </div>
    </section>
  )
}
