import { useState } from 'react'
import { profile, skills } from '../data'

const skillCategories = ['Frontend', 'Backend', 'Diseño', 'DevOps']

export default function About() {
  const [activeSkillCat, setActiveSkillCat] = useState('Frontend')
  const filteredSkills = skills.filter(s => s.category === activeSkillCat)

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">Sobre mí</span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left col — bio */}
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>La persona detrás del código.</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {profile.bioLong}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Cuando no estoy en la pantalla, entreno escalada en roca, leo sobre diseño de sistemas y tomo café a niveles poco responsables.
            </p>

            {/* Profile info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                { icon: '📍', text: profile.location },
                { icon: '✉️', text: profile.email },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={profile.cvUrl} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: '999px',
                background: 'var(--accent)', color: '#0a0a0a', fontWeight: 600, fontSize: '0.9rem',
                transition: 'all var(--transition)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#d4f85a' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)' }}
              >
                Descargar CV ↓
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: '999px',
                background: 'transparent', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem',
                border: '1px solid var(--border)', transition: 'all var(--transition)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
              >LinkedIn ↗</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: '999px',
                background: 'transparent', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem',
                border: '1px solid var(--border)', transition: 'all var(--transition)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
              >GitHub ↗</a>
            </div>
          </div>

          {/* Right col — skills */}
          <div>
            {/* Avatar placeholder */}
            <div style={{
              width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius)',
              background: 'var(--bg2)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '2rem', fontSize: '5rem',
            }}>
              🧑‍💻
            </div>

            {/* Skill category filter */}
            <div style={{ display: 'flex', gap: 8, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {skillCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCat(cat)}
                  style={{
                    padding: '5px 14px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 500,
                    background: activeSkillCat === cat ? 'var(--accent)' : 'var(--bg3)',
                    color: activeSkillCat === cat ? '#0a0a0a' : 'var(--text-muted)',
                    border: `1px solid ${activeSkillCat === cat ? 'var(--accent)' : 'var(--border)'}`,
                    cursor: 'pointer', transition: 'all var(--transition)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {filteredSkills.map(skill => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.88rem' }}>
                    <span style={{ fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--bg3)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, var(--accent), #a8d020)',
                      borderRadius: 999,
                      transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
