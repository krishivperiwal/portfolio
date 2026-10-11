import resumeUrl from './assets/Krishiv_Periwal_Resume.pdf?url'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  profile,
  heroPhrases,
  about,
  marqueeA,
  marqueeB,
  roadmap,
  railProjects,
  tried,
  triedStatus,
  extras,
} from './data.js'

// Drop a file named portrait.jpg / .png / .webp into src/assets and it is picked up automatically.
const portraits = import.meta.glob('./assets/portrait.*', { eager: true, query: '?url', import: 'default' })
const PORTRAIT = Object.values(portraits)[0] || null

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))

/* ---------------- loader ---------------- */
function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let raf
    const start = performance.now()
    const dur = 2700
    const tick = (now) => {
      const k = clamp((now - start) / dur, 0, 1)
      const eased = 1 - Math.pow(1 - k, 2.2)
      setPct(Math.round(eased * 100))
      if (k < 1) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => setLeaving(true), 350)
        setTimeout(() => {
          document.body.style.overflow = ''
          onDone()
        }, 1100)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className={`loader ${leaving ? 'leave' : ''}`}>
      <span className="mono l-tl">INITIALIZING SYSTEM</span>
      <span className="mono l-tr">PORTFOLIO 2026</span>
      <div className="l-center">
        <h1 className="l-name">
          KRISHIV <span>PERIWAL</span>
        </h1>
        <p className="mono l-role">FULL-STACK ENGINEER &amp; PROBLEM SOLVER</p>
        <div className="l-pct">{pct}%</div>
      </div>
      <div className="l-bar">
        <div className="l-meta mono">
          <span>LOADING MODULES...</span>
          <span>SECURE CONNECTION</span>
        </div>
        <div className="l-track">
          <i style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}

/* ---------------- nav ---------------- */
const NAV = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Expertise', '#expertise'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Tried', '#tried'],
  ['Contact', '#contact'],
]

function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <a className="logo" href="#home">
        Krishiv<span>.</span>
      </a>
      <nav className="links">
        {NAV.map(([l, h]) => (
          <a key={l} href={h}>
            {l}
          </a>
        ))}
      </nav>
      <a
        className="pill small"
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          const a = document.createElement('a')
          a.href = resumeUrl
          a.download = 'Krishiv_Periwal_Resume.pdf'
          document.body.appendChild(a)
          a.click()
          a.remove()
        }}
      >
        Hire Me
      </a>
    </header>
  )
}

/* ---------------- portrait ---------------- */
function Portrait({ className = '' }) {
  if (PORTRAIT) return <img className={className} src={PORTRAIT} alt={profile.name} draggable="false" />
  return (
    <div className={`ph ${className}`} aria-label="Portrait placeholder">
      <svg viewBox="0 0 400 520" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="phg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b9b9c2" />
            <stop offset="1" stopColor="#6d6b78" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="170" r="92" fill="url(#phg)" />
        <path d="M30 520c8-120 70-190 170-190s162 70 170 190z" fill="url(#phg)" />
      </svg>
      <span className="mono">ADD src/assets/portrait.jpg</span>
    </div>
  )
}

/* ---------------- hero (scroll-scrubbed) ---------------- */
function Hero() {
  const ref = useRef(null)
  const [t, setT] = useState(0)
  const [m, setM] = useState({ x: 0, y: 0 })
  const N = heroPhrases.length

  useEffect(() => {
    let raf
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        const max = r.height - window.innerHeight
        setT(clamp(-r.top / max, 0, 1))
      })
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
    }
  }, [])

  const onMove = (e) => setM({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })
  const active = clamp(Math.floor(t * N), 0, N - 1)

  const phraseStyle = (i) => {
    let d = t * N - i - 0.5
    if (i === 0 && d < 0) d = 0
    if (i === N - 1 && d > 0) d = 0
    const k = Math.abs(d)
    const op = clamp(1 - (k - 0.26) / 0.22, 0, 1)
    return { opacity: op, filter: `blur(${(k * 18).toFixed(1)}px)`, transform: `translate3d(0, ${(-d * 150).toFixed(1)}px, 0)`, '--ghost': op * 0.35 }
  }

  return (
    <section id="home" className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero-sticky">
        <div className="hero-glow" style={{ transform: `scale(${1 + t * 0.25})` }} />
        <div
          className="hero-photo"
          style={{ transform: `translate3d(${m.x * -22}px, ${m.y * -14 - t * 50}px, 0) scale(${1 + t * 0.1})` }}
        >
          <Portrait />
        </div>
        <div className="hero-vignette" />

        <div className="hero-left">
          <p className="mono eyebrow">
            HI, I&apos;M <u>KRISHIV</u>
          </p>
          <div className="stack">
            {heroPhrases.map((p, i) => (
              <h2 key={i} className="headline" style={phraseStyle(i)} aria-hidden={i !== active}>
                {p.lines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </h2>
            ))}
          </div>
        </div>

        <div className="hero-right">
          {heroPhrases.map((p, i) => (
            <div key={i} className="tagblock" style={phraseStyle(i)}>
              <p className="mono tag">{p.tag}</p>
              <p className="tagtext">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <a className="pill solid" href="#projects">
            View My Work
          </a>
          <a className="pill ghost" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="scrub mono">
          <span>↓ SCROLL TO SCRUB TIMELINE</span>
          <div className="scrub-bar">
            <i style={{ transform: `scaleX(${t})` }} />
          </div>
          <span>
            {String(active + 1).padStart(2, '0')}/{String(N).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

/* ---------------- helpers ---------------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Pill({ children }) {
  return <span className="pilltag mono">● {children}</span>
}

function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

function Links({ links }) {
  const entries = Object.entries(links || {}).filter(([, v]) => v)
  if (!entries.length) return null
  return (
    <div className="plinks">
      {entries.map(([k, v]) => (
        <a key={k} href={v} target="_blank" rel="noreferrer">
          {{ live: 'Live', code: 'GitHub', api: 'API repo', client: 'Client repo' }[k] || k} ↗
        </a>
      ))}
    </div>
  )
}

/* ---------------- sections ---------------- */
function About() {
  return (
    <section id="about" className="sec about">
      <div className="phone-wrap">
        <i className="phone-blob" />
        <i className="phone-blob b2" />
      <div className="phone rv">
        <div className="phone-in">
          <Portrait />
          <div className="open">
            <i />
            <span className="mono">OPEN TO OPPORTUNITIES</span>
            <b className="mono">2026</b>
          </div>
        </div>
      </div>
      </div>
      <div className="about-copy">
        <Pill>// SYSTEM PROFILE</Pill>
        <h2 className="h-xl rv">
          Hello, I&apos;m
          <br />
          <span>{profile.name}</span>
        </h2>
        <p className="lead rv">{about.text}</p>
        <div className="chips rv">
          {about.chips.map(([a, b]) => (
            <div key={a} className="chip">
              <b>{a}</b>
              <span className="mono">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const row = (items, rev) => (
    <div className={`mq ${rev ? 'rev' : ''}`}>
      <div className="mq-track">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="mq-chip">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
  return (
    <section id="skills" className="sec center">
      <Pill>TECHNICAL STACK</Pill>
      <h2 className="h-lg rv">Technologies I Work With</h2>
      <p className="sub rv">Full-stack and cloud tooling I use to build, deploy and scale real services.</p>
      <div className="mq-wrap">
        {row(marqueeA, false)}
        {row(marqueeB, true)}
      </div>
    </section>
  )
}

function Roadmap() {
  return (
    <section id="expertise" className="sec center">
      <Pill>// ENGINEERING ROADMAP</Pill>
      <h2 className="h-lg rv">Core Execution Root Map</h2>
      <div className="roots">
        {roadmap.map((r) => (
          <div key={r.n} className="root-wrap rv">
            <i className="blob" />
            <article
              className="root"
              onMouseMove={(e) => {
                const b = e.currentTarget.getBoundingClientRect()
                const x = (e.clientX - b.left) / b.width - 0.5
                const y = (e.clientY - b.top) / b.height - 0.5
                e.currentTarget.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`
              }}
              onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
            >
              <div className="root-top mono">
                <span>// ROOT {r.n}</span>
                <i />
              </div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <Tags items={r.tags} />
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

function RailLinks({ links }) {
  const labels = { live: 'LIVE', code: 'CODE', api: 'API', client: 'CLIENT' }
  const entries = Object.entries(links || {}).filter(([, v]) => v)
  if (!entries.length) return null
  return (
    <div className="rc-links mono">
      {entries.map(([k, v]) => (
        <a key={k} href={v} target="_blank" rel="noreferrer">
          {labels[k] || k} →
        </a>
      ))}
    </div>
  )
}

function Projects() {
  const ref = useRef(null)
  const track = useRef(null)
  const [t, setT] = useState(0)
  const [d, setD] = useState({ vw: 1280, vh: 720, tw: 2400, centers: [] })

  useEffect(() => {
    const measure = () => {
      const kids = track.current ? [...track.current.children] : []
      setD({
        vw: window.innerWidth,
        vh: window.innerHeight,
        tw: track.current ? track.current.scrollWidth : 2400,
        centers: kids.map((k) => k.offsetLeft + k.offsetWidth / 2),
      })
    }
    let raf
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        const max = r.height - window.innerHeight
        setT(clamp(-r.top / max, 0, 1))
      })
    }
    measure()
    on()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', on, { passive: true })
    const id = setTimeout(measure, 600)
    return () => {
      clearTimeout(id)
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', on)
    }
  }, [])

  const travel = Math.max(0, d.tw - d.vw)
  const shift = travel * t

  return (
    <section id="projects" className="rail" ref={ref} style={{ height: d.vh + travel + d.vh * 0.2 }}>
      <div className="rail-sticky">
        <div className="rail-head">
          <Pill>// PORTFOLIO WORK</Pill>
          <h2 className="h-lg rv">Featured Engineering Projects</h2>
        </div>
        <div className="rail-track" ref={track} style={{ transform: `translate3d(${-shift}px,0,0)` }}>
          {railProjects.map((p, i) => {
            const x = (d.centers[i] ?? 0) - shift - d.vw / 2
            const dist = x / d.vw
            const ry = clamp(-dist * 26, -26, 26)
            const tz = -Math.abs(dist) * 160
            return (
              <article
                key={p.n}
                className={`rcard ${p.featured ? 'wide' : ''}`}
                style={{ transform: `perspective(1200px) translateZ(${tz}px) rotateY(${ry}deg) rotateX(4deg)` }}
              >
                <div className="rc-top mono">
                  <span>// PROJECT {p.n}</span>
                  <b>{p.category}</b>
                </div>
                {p.badge && <span className="mono badge-w gold">{p.badge}</span>}
                <h3>{p.title}</h3>
                <p className="rc-text">{p.text}</p>
                {p.flow && (
                  <div className="flow">
                    {p.flow.map((f, k) => (
                      <React.Fragment key={f}>
                        <span className="node mono">{f}</span>
                        {k < p.flow.length - 1 && <span className="arr">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {p.bullets && (
                  <ul>
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                <div className="rc-foot">
                  <Tags items={p.tags} />
                  <RailLinks links={p.links} />
                </div>
              </article>
            )
          })}
        </div>
        <div className="rail-hint mono">
          <span>DRAG THE PAGE ↓ TO SLIDE</span>
          <div className="scrub-bar">
            <i style={{ transform: `scaleX(${t})` }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Tried() {
  return (
    <section id="tried" className="sec center">
      <Pill>// EXPERIMENTS LOG</Pill>
      <h2 className="h-lg rv">Things I&apos;ve Tried</h2>
      <p className="sub rv">Startup ideas I explored, what I learned, and why I moved on. Initiative and judgment, not a graveyard.</p>
      <div className="log">
        {tried.map((t, i) => (
          <article key={t.name} className={`entry rv tone-${t.color}`}>
            <div className="entry-top mono">
              <span>EXP_{String(i + 1).padStart(2, '0')}</span>
              <b>{triedStatus[t.name] || t.verdict.toUpperCase()}</b>
            </div>
            <h3>{t.name}</h3>
            <p>{t.body}</p>
            <p className="learn">
              <span className="mono">LEARNED</span> {t.lesson}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Extras() {
  return (
    <section className="sec center tight">
      <div className="grid3">
        {extras.map((e) => (
          <div key={e.title} className="xtra rv">
            <b>{e.title}</b>
            <span>{e.body}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [f, setF] = useState({ first: '', last: '', email: '', msg: '', ok: false })
  const [sent, setSent] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const name = `${f.first} ${f.last}`.trim()
  const canSend = f.first && f.email && f.msg && f.ok

  const submit = async (e) => {
    e.preventDefault()
    if (!canSend || sent === 'sending') return
    setSent('sending')
    try {
      const r = await fetch('https://formspree.io/f/xgaozppy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email: f.email, message: f.msg, _subject: `Portfolio message from ${name}` }),
      })
      if (!r.ok) throw new Error('bad')
      setSent('ok')
      setF({ first: '', last: '', email: '', msg: '', ok: false })
    } catch {
      setSent('err')
    }
  }

  const socials = [
    ['LinkedIn', profile.linkedin],
    ['GitHub', profile.github],
    ['LeetCode', profile.leetcode],
    profile.neetcode ? ['NeetCode', profile.neetcode] : null,
    profile.codeforces ? ['Codeforces', profile.codeforces] : null,
  ].filter(Boolean)

  return (
    <section id="contact" className="sec center">
      <div className="contact">
        <div className="dispatch rv">
          <i className="dspin" />
          <i className="dspin d2" />
          <p className="mono live">
            // LIVE DISPATCH NODE <i />
          </p>
          <h2 className="h-md">
            Let&apos;s Build Something
            <br />
            Exceptional.
          </h2>
          <p className="sub left">Fill out the transmission form and watch your payload build below. Open to internships and freelance projects.</p>
          <pre className="payload mono">
            <span className="c">{'// payload_preview.json'}</span>
            {'\n'}
            <b>sender:</b> {name ? `"${name}"` : <em>[Awaiting Name]</em>}
            {'\n'}
            <b>email:</b> {f.email ? `"${f.email}"` : <em>[Awaiting Email]</em>}
            {'\n'}
            <b>message:</b> {f.msg ? `"${f.msg.length > 90 ? f.msg.slice(0, 90) + '…' : f.msg}"` : <em>[Awaiting Message]</em>}
          </pre>
          <div className="socials">
            {socials.map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer">
                {l} ↗
              </a>
            ))}
          </div>
        </div>

        <form className="form rv" onSubmit={submit}>
          <div className="row2">
            <input placeholder="First Name" value={f.first} onChange={set('first')} required />
            <input placeholder="Last Name" value={f.last} onChange={set('last')} />
          </div>
          <input type="email" placeholder="Email Address" value={f.email} onChange={set('email')} required />
          <textarea rows="5" placeholder="Type your message here..." value={f.msg} onChange={set('msg')} required />
          <div className="form-foot">
            <label>
              <input type="checkbox" checked={f.ok} onChange={set('ok')} />
              <span>I give permission to contact me at this email address.</span>
            </label>
            <button className="pill solid" disabled={!canSend || sent === 'sending'}>
              {sent === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
          {sent === 'sending' && <p className="mono sent">Transmitting…</p>}
          {sent === 'ok' && <p className="mono sent">Message delivered. I will get back to you soon.</p>}
          {sent === 'err' && (
            <p className="mono sent">
              Something went wrong. Please email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bigfoot">
      <div className="bf-ghost" aria-hidden="true">CONTACT</div>
      <div className="bf-strip mono">
        <div>
          <p className="bf-h">// System Architecture</p>
          <p>Full-Stack Web Engineering</p>
          <p>React, Node &amp; Scalable Systems</p>
        </div>
        <div className="bf-mid">
          <p className="bf-h">// Status</p>
          <p className="bf-open">Open to Opportunities</p>
          <a href="#projects">View Work</a>
        </div>
        <div className="bf-right">
          <p className="bf-h">// Region</p>
          <p>India / Worldwide</p>
          <p>2026</p>
        </div>
      </div>
      <div className="bf-name">KRISHIV</div>
      <div className="bf-bottom mono">
        <div>
          <a className="bf-link" href="#contact">Contact Transmission</a>
          <p>© {new Date().getFullYear()} {profile.name} | Built with React</p>
        </div>
        <a className="bf-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="bf-link bf-top" href="#home">Back to Top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  useReveal()
  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Roadmap />
        <Projects />
        <Tried />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
