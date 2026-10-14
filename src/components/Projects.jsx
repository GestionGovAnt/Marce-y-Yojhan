import { useCallback, useEffect, useRef, useState } from 'react'
import { team } from '../data/team'

const AUTOPLAY_MS = 5000

const projects = team.flatMap(profile =>
  profile.projects.map(project => ({ ...project, owner: profile.name })),
)

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = e => setReduced(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function usePageVisible() {
  const [visible, setVisible] = useState(
    () => typeof document === 'undefined' || !document.hidden,
  )

  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])

  return visible
}

function ProjectCard({ project, index, total }) {
  return (
    <article
      className={`project-card${index % 2 ? ' project-card-alt' : ''}`}
      role="group"
      aria-roledescription="diapositiva"
      aria-label={`${index + 1} de ${total}: ${project.title}`}
    >
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

function ProjectCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [interacting, setInteracting] = useState(false)

  const reducedMotion = usePrefersReducedMotion()
  const pageVisible = usePageVisible()

  const total = projects.length
  const isRunning =
    total > 1 && !userPaused && !interacting && !reducedMotion && pageVisible

  const goTo = useCallback(
    index => {
      const track = trackRef.current
      if (!track) return
      const safeIndex = (index + total) % total
      const card = track.children[safeIndex]
      if (!card) return
      track.scrollTo({
        left: card.offsetLeft,
        behavior: reducedMotion ? 'auto' : 'smooth',
      })
    },
    [total, reducedMotion],
  )

  const next = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    goTo(atEnd ? 0 : active + 1)
  }, [active, goTo])

  // Sincroniza la tarjeta activa con el scroll real (autoplay, botones o swipe)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        let closest = 0
        let minDistance = Infinity
        Array.from(track.children).forEach((card, i) => {
          const distance = Math.abs(card.offsetLeft - track.scrollLeft)
          if (distance < minDistance) {
            minDistance = distance
            closest = i
          }
        })
        setActive(closest)
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Autoplay
  useEffect(() => {
    if (!isRunning) return
    const id = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [isRunning, next])

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Proyectos"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false)
      }}
    >
      <div
        ref={trackRef}
        className="project-grid"
        aria-live={isRunning ? 'off' : 'polite'}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.owner}-${project.id}`}
            project={project}
            index={index}
            total={total}
          />
        ))}
      </div>

      {total > 1 && (
        <div className="carousel-controls">
          <div className="carousel-dots">
            {projects.map((project, index) => (
              <button
                key={`dot-${project.owner}-${project.id}`}
                type="button"
                className={`carousel-dot${index === active ? ' is-active' : ''}`}
                aria-label={`Ir al proyecto ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <div className="carousel-buttons">
            <button type="button" className="carousel-button" aria-label="Proyecto anterior" onClick={() => goTo(active - 1)}>←</button>
            {!reducedMotion && (
              <button
                type="button"
                className="carousel-button"
                aria-label={userPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
                onClick={() => setUserPaused(p => !p)}
              >
                {userPaused ? '▶' : '❚❚'}
              </button>
            )}
            <button type="button" className="carousel-button" aria-label="Siguiente proyecto" onClick={next}>→</button>
          </div>
        </div>
      )}
    </div>
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
          <ProjectCarousel />
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