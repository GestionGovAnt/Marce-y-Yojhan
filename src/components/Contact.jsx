import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Escribe tu nombre'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.message.trim() || form.message.length < 20) e.message = 'Mínimo 20 caracteres'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setStatus('sending')
    // Simulación de envío — reemplaza con EmailJS o Resend
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  const inputStyle = (hasError) => ({
    width: '100%', padding: '12px 16px',
    background: 'var(--bg2)', color: 'var(--text)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--border)'}`,
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.95rem', fontFamily: 'var(--font-body)',
    outline: 'none', transition: 'border-color var(--transition)',
    resize: 'none',
  })

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="section-label">Contacto</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left — info */}
          <div>
            <h2 style={{ marginBottom: '1rem' }}>Hablemos de tu proyecto.</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Respondo todos los mensajes en menos de 24 horas. Si prefieres algo más directo, escríbeme por email.
            </p>

            {/* Availability */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '14px 18px', borderRadius: 'var(--radius-sm)',
              background: 'var(--accent-glow)', border: '1px solid var(--accent)',
              marginBottom: '2rem',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 500 }}>
                Disponible para proyectos freelance en 2025
              </span>
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <a href={`mailto:${profile.email}`} style={{
                display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: '0.92rem',
                transition: 'color var(--transition)',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <span style={{ fontSize: '1.1rem' }}>✉️</span> {profile.email}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <span>📍</span> {profile.location}
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'LinkedIn', href: profile.linkedin },
                { label: 'GitHub', href: profile.github },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  padding: '8px 18px', borderRadius: '999px',
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500,
                  transition: 'all var(--transition)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >{s.label} ↗</a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'sent' ? (
              <div style={{
                padding: '3rem', textAlign: 'center',
                background: 'var(--bg2)', border: '1px solid var(--accent)',
                borderRadius: 'var(--radius)',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent)' }}>Mensaje enviado</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Te respondo en menos de 24 horas. ¡Gracias por escribir!
                </p>
                <button onClick={() => setStatus(null)} style={{
                  marginTop: '1.5rem', padding: '10px 24px', borderRadius: '999px',
                  background: 'var(--accent)', color: '#0a0a0a', fontWeight: 600, fontSize: '0.88rem',
                  cursor: 'pointer',
                }}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: 6, color: 'var(--text-muted)' }}>
                    Nombre
                  </label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Tu nombre completo"
                    style={inputStyle(errors.name)}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border)'}
                  />
                  {errors.name && <p style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: 4 }}>{errors.name}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: 6, color: 'var(--text-muted)' }}>
                    Email
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="tu@email.com"
                    style={inputStyle(errors.email)}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)'}
                  />
                  {errors.email && <p style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: 4 }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, marginBottom: 6, color: 'var(--text-muted)' }}>
                    Mensaje
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto — qué necesitas, plazos, presupuesto..."
                    rows={5}
                    style={inputStyle(errors.message)}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)'}
                  />
                  {errors.message && <p style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: 4 }}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    padding: '14px', borderRadius: '999px',
                    background: status === 'sending' ? 'var(--bg3)' : 'var(--accent)',
                    color: status === 'sending' ? 'var(--text-muted)' : '#0a0a0a',
                    fontWeight: 600, fontSize: '0.95rem',
                    border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'all var(--transition)',
                  }}
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center' }}>
                  Sin spam. Solo te contacto si puedo ayudarte.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
