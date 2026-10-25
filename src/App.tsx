import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type MouseEvent } from 'react'
import { profile, works, strengths, skills, stack, languages, career, type Work } from './data'

/** Fades children in when they scroll into view. */
function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/** Tracks the pointer so CSS can draw a spotlight on the card. */
function spotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function useTokyoTime() {
  const fmt = () => new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }).format(new Date())
  const [t, setT] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 10_000)
    return () => clearInterval(id)
  }, [])
  return t
}

function Nav() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])
  return (
    <header className="nav">
      <a href="#top" className="logo">B<span>.</span>N</a>
      <nav>
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#skills">Skills</a>
        <a href="#career">Career</a>
      </nav>
      <button className="theme-btn" aria-label="テーマ切替" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '☀' : '☾'}
      </button>
      <a href="#contact" className="nav-cta">Contact</a>
    </header>
  )
}

function Hero() {
  const time = useTokyoTime()
  return (
    <section className="hero" id="top">
      <Reveal>
        <p className="kicker"><span className="dot" /> 就業先を探しています — Open to work</p>
        <h1 className="headline">
          <span className="grad">Frontend</span><br />Engineer<span className="accent">.</span>
        </h1>
        <p className="sub">
          {profile.nameJa} <em>/ {profile.nameEn}</em><br />
          React・Next.js・TypeScriptで、<strong>使う人にとって分かりやすいWeb</strong>をつくります。
        </p>
      </Reveal>

      <div className="bento">
        <Reveal className="b-photo" delay={100}>
          <div className="tile photo" onMouseMove={spotlight}>
            <img src="images/profile.jpg" alt={profile.nameJa} />
          </div>
        </Reveal>
        <Reveal className="b-stat" delay={160}>
          <div className="tile" onMouseMove={spotlight}>
            <p className="big">14<small>年</small></p>
            <p className="label">お客様と向き合ってきた<br />旅行業・接客の経験</p>
          </div>
        </Reveal>
        <Reveal className="b-stat2" delay={220}>
          <div className="tile" onMouseMove={spotlight}>
            <p className="big">{works.length}<small>+</small></p>
            <p className="label">公開中の<br />Webサイト・アプリ</p>
          </div>
        </Reveal>
        <Reveal className="b-loc" delay={280}>
          <div className="tile loc" onMouseMove={spotlight}>
            <p className="label">📍 日本在住 · 東京時間</p>
            <p className="clock">{time}</p>
            <p className="label">在留資格：日本人の配偶者等（就労制限なし）</p>
          </div>
        </Reveal>
        <Reveal className="b-lang" delay={340}>
          <div className="tile" onMouseMove={spotlight}>
            <p className="label">Languages</p>
            <ul className="langs">
              {languages.map(l => (
                <li key={l.name}>
                  <div><span>{l.name}</span><em>{l.level}</em></div>
                  <i style={{ '--w': `${l.pct}%` } as CSSProperties} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="b-stack" delay={400}>
          <div className="tile marquee-tile">
            <div className="marquee">
              {[...stack, ...stack].map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <Reveal><h2 className="title"><span>01 — About</span>自己紹介</h2></Reveal>
      <div className="about">
        <Reveal className="about-text">
          <p>モンゴル科学技術大学（通信専攻）を卒業後、韓国とモンゴルの旅行業界で約14年間、お客様対応・Webサイト制作・情報発信を担当してきました。</p>
          <p>2023年に来日し、介護職や食品工場で働きながらWeb開発と生成AIツールを独学。2026年からはフリーランスのWeb開発者として、企業サイトの受託制作や、Next.js・Supabaseを用いたWebアプリの開発・運用を行っています。</p>
          <p>現在、<strong>フロントエンドエンジニア</strong>としての就業を希望しています。</p>
        </Reveal>
        <div className="strengths">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="tile strength" onMouseMove={spotlight}>
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ w }: { w: Work }) {
  const host = new URL(w.live).host
  return (
    <article className={`tile work ${w.featured ? 'featured' : ''}`} onMouseMove={spotlight}>
      <a href={w.live} target="_blank" rel="noopener" className="browser" aria-label={`${w.title}を開く`}>
        <div className="browser-bar"><i /><i /><i /><span>{host}</span></div>
        <img src={`images/works/${w.id}.jpg`} alt={w.title} loading="lazy" />
      </a>
      <div className="work-body">
        <p className="work-type">{w.type}</p>
        <h3>{w.title}</h3>
        <p className="work-desc">{w.desc}</p>
        <ul className="tech">{w.tech.map(t => <li key={t}>{t}</li>)}</ul>
        <div className="work-links">
          <a href={w.live} target="_blank" rel="noopener" className="live">サイトを見る ↗</a>
          {w.code && <a href={w.code} target="_blank" rel="noopener" className="code">GitHub</a>}
        </div>
      </div>
    </article>
  )
}

function Works() {
  return (
    <section className="section" id="works">
      <Reveal><h2 className="title"><span>02 — Works</span>制作実績</h2></Reveal>
      <div className="works">
        {works.map((w, i) => (
          <Reveal key={w.id} delay={(i % 2) * 100} className={w.featured ? 'span-all' : ''}>
            <WorkCard w={w} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal><h2 className="title"><span>03 — Skills</span>スキル</h2></Reveal>
      <div className="skills">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 80}>
            <div className="tile skill" onMouseMove={spotlight}>
              <h3>{g.group}</h3>
              <ul className="chips">{g.items.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Career() {
  return (
    <section className="section" id="career">
      <Reveal><h2 className="title"><span>04 — Career</span>経歴</h2></Reveal>
      <ol className="timeline">
        {career.map((c, i) => (
          <Reveal key={c.when} delay={i * 60}>
            <li>
              <time>{c.when}</time>
              <h3>{c.title}</h3>
              {c.body && <p>{c.body}</p>}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="kicker"><span className="dot" /> Let’s work together</p>
        <h2>一緒に働けることを<br /><span className="grad">楽しみにしています。</span></h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="btn primary">✉ {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener" className="btn ghost">GitHub ↗</a>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <>
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Works />
        <Skills />
        <Career />
        <Contact />
      </main>
      <footer className="footer">© 2026 {profile.nameEn} — Built with React + TypeScript + Vite</footer>
    </>
  )
}
