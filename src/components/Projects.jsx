import { useState } from 'react'
import { projects } from '../data'

const categories = ['Todos', 'Full-Stack', 'Frontend', 'Diseño + Dev']

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg2)',
        border: `1px solid ${hovered ? project.color + '44' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        transition: 'all var(--transition)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card top — visual */}
      <div style={{
        height: 180,
        background: `linear-gradient(135deg, ${project.color}18 0%, var(--bg3) 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '4rem',
        position: 'relative',
        borderBottom: '1px solid var(--border)',
      }}>
        {project.emoji}
        <span style={{
          position: 'absolute', top: 12, right: 12,
          fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em',
          padding: '4px 10px', borderRadius: '999px',
          background: project.color + '22', color: project.color, border: `1px solid ${project.color}44`,
        }}>
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>{project.title}</h3>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
          {project.problem}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.25rem' }}>
          {project.tags.map(tag => (
            <span key={tag} className="chip" style={{ fontSize: '0.72rem' }}>{tag}</span>
          ))}
        </div>

        {/* Results */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
          {project.results.map(r => (
            <div key={r.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: project.color }}>
                {r.metric}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: 2, lineHeight: 1.3 }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label">Proyectos</span>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <h2 style={{ maxWidth: 460 }}>Trabajo que habla por sí solo.</h2>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '7px 16px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 500,
                  background: active === cat ? 'var(--accent)' : 'var(--bg3)',
                  color: active === cat ? '#0a0a0a' : 'var(--text-muted)',
                  border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
