/* =============================================
   WHITE WOLF LABS — style.css (Light Theme)
   ============================================= */

:root {
  --black: #1a2332;
  --white: #f7f8fc;
  --surface: #ffffff;
  --surface-2: #eef4fb;
  --accent: #4a9edd;
  --accent-dark: #2e7bbf;
  --accent-dim: rgba(74, 158, 221, 0.12);
  --accent-dim2: rgba(74, 158, 221, 0.06);
  --border: #dde8f5;
  --border-mid: #c8daf0;
  --text-main: #1a2332;
  --text-muted: #6b82a0;
  --text-light: #9ab0c8;
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'Space Mono', monospace;
  --radius: 6px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow: 0 2px 20px rgba(74, 158, 221, 0.1);
  --shadow-md: 0 8px 40px rgba(74, 158, 221, 0.15);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--accent) var(--surface-2);
}
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--surface-2); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

body {
  background: var(--white);
  color: var(--text-main);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  overflow-x: hidden;
  cursor: none;
}

/* ---- CURSOR ---- */
.cursor {
  position: fixed;
  width: 32px; height: 32px;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease, opacity 0.2s ease, background 0.2s ease;
  transform: translate(-50%, -50%);
}
.cursor-dot {
  position: fixed;
  width: 6px; height: 6px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
}

/* ---- TYPOGRAPHY ---- */
h1, h2, h3 { line-height: 1.1; color: var(--text-main); }
h1 { font-family: var(--font-display); font-size: clamp(4.5rem, 11vw, 10rem); letter-spacing: 0.01em; }
h2 { font-family: var(--font-display); font-size: clamp(2.6rem, 5.5vw, 5.5rem); }
h3 { font-family: var(--font-body); font-weight: 500; font-size: 1.2rem; }
h4 { font-family: var(--font-body); font-weight: 500; font-size: 1rem; }
em { font-style: italic; color: var(--accent-dark); }

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

/* ---- BUTTONS ---- */
.btn {
  display: inline-flex; align-items: center;
  padding: 14px 32px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  border-radius: var(--radius);
  border: none;
  cursor: none;
  transition: var(--transition);
  font-weight: 400;
}
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-dark); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(74,158,221,0.35); }
.btn-ghost { background: transparent; color: var(--text-main); border: 1.5px solid var(--border-mid); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
.btn-full { width: 100%; justify-content: center; }

/* ---- SECTION COMMON ---- */
section { padding: 120px 0; }
.section-header { text-align: center; margin-bottom: 72px; }
.section-header h2 { margin-top: 16px; }
.section-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 0.70rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--accent-dark); background: var(--accent-dim);
  padding: 6px 14px; border-radius: 100px;
  border: 1px solid var(--border-mid);
}

/* ---- NAV ---- */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 60px; transition: var(--transition);
}
.nav.scrolled {
  background: rgba(247,248,252,0.94);
  backdrop-filter: blur(16px);
  padding: 16px 60px;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 20px rgba(74,158,221,0.08);
}
.nav-logo { font-family: var(--font-display); font-size: 1.8rem; letter-spacing: 0.1em; color: var(--accent-dark); }
.nav-links { display: flex; align-items: center; gap: 40px; list-style: none; }
.nav-links a { font-family: var(--font-mono); font-size: 0.76rem; letter-spacing: 0.08em; color: var(--text-muted); transition: color 0.2s; }
.nav-links a:hover { color: var(--text-main); }
.nav-cta { background: var(--accent) !important; color: #fff !important; padding: 10px 24px; border-radius: var(--radius); }
.nav-cta:hover { background: var(--accent-dark) !important; box-shadow: 0 4px 20px rgba(74,158,221,0.3); }
.nav-menu-btn { display: none; flex-direction: column; gap: 6px; background: none; border: none; cursor: none; padding: 4px; }
.nav-menu-btn span { display: block; width: 28px; height: 1.5px; background: var(--text-main); transition: var(--transition); }

/* ---- MOBILE MENU ---- */
.mobile-menu { display: none; position: fixed; inset: 0; z-index: 99; background: var(--white); align-items: center; justify-content: center; flex-direction: column; }
.mobile-menu.open { display: flex; }
.mobile-menu ul { list-style: none; text-align: center; }
.mobile-menu ul li { margin: 20px 0; }
.mobile-menu ul li a { font-family: var(--font-display); font-size: 3.5rem; letter-spacing: 0.05em; color: var(--text-main); transition: color 0.2s; }
.mobile-menu ul li a:hover { color: var(--accent); }

/* ---- HERO ---- */
.hero {
  min-height: 100vh; display: flex; flex-direction: column;
  justify-content: center; padding-top: 120px;
  position: relative; overflow: hidden;
  background: linear-gradient(160deg, #f0f7ff 0%, #f7f8fc 40%, #eef4fb 100%);
}
.hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(74,158,221,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,221,0.06) 1px, transparent 1px);
  background-size: 80px 80px;
}
.orb { position: absolute; border-radius: 50%; filter: blur(100px); animation: orbFloat 8s ease-in-out infinite; }
.orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(74,158,221,0.14) 0%, transparent 70%); top: -250px; right: -150px; }
.orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(147,197,253,0.12) 0%, transparent 70%); bottom: 80px; left: -150px; animation-delay: -4s; }
@keyframes orbFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }

.hero-content { position: relative; z-index: 1; max-width: 1400px; margin: 0 auto; padding: 0 60px 160px; }
.hero-eyebrow { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 0.70rem; letter-spacing: 0.2em; color: var(--text-muted); margin-bottom: 32px; animation: fadeUp 0.8s ease both; }
.dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; animation: pulse 2s ease infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }
.hero-title { display: flex; flex-direction: column; margin-bottom: 32px; }
.hero-title .line { display: block; animation: fadeUp 0.8s ease both; color: var(--text-main); }
.hero-title .line:nth-child(1) { animation-delay: 0.1s; }
.hero-title .line:nth-child(2) { animation-delay: 0.2s; color: var(--accent); }
.hero-title .line:nth-child(3) { animation-delay: 0.3s; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.hero-sub { font-size: 1.1rem; color: var(--text-muted); max-width: 520px; margin-bottom: 48px; animation: fadeUp 0.8s 0.4s ease both; font-weight: 300; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; animation: fadeUp 0.8s 0.5s ease both; }
.hero-scroll { position: absolute; bottom: 180px; right: 60px; display: flex; flex-direction: column; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.2em; color: var(--text-light); writing-mode: vertical-rl; z-index: 1; }
.scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scrollLine 2s ease infinite; }
@keyframes scrollLine { 0% { opacity: 0; transform: scaleY(0); transform-origin: top; } 50% { opacity: 1; transform: scaleY(1); } 100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; } }

/* ---- TICKER ---- */
.ticker-wrap { position: absolute; bottom: 0; left: 0; right: 0; background: var(--accent); overflow: hidden; z-index: 1; padding: 12px 0; }
.ticker { display: flex; gap: 40px; width: max-content; animation: ticker 22s linear infinite; }
.ticker span { font-family: var(--font-mono); font-size: 0.70rem; letter-spacing: 0.12em; color: #fff; white-space: nowrap; }
.ticker .sep { color: rgba(255,255,255,0.5); }
@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* ---- STATS ---- */
.stats { padding: 60px 0; background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.stats-inner { max-width: 1200px; margin: 0 auto; padding: 0 60px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
.stat { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 20px; position: relative; }
.stat + .stat::before { content: ''; position: absolute; left: 0; top: 20%; bottom: 20%; width: 1px; background: var(--border); }
.stat-num { font-family: var(--font-display); font-size: 4.5rem; color: var(--accent); line-height: 1; }
.stat-suffix { font-family: var(--font-display); font-size: 2rem; color: var(--accent); margin-top: -8px; }
.stat-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--text-muted); text-transform: uppercase; margin-top: 6px; }

/* ---- WORK ---- */
.work { max-width: 1400px; margin: 0 auto; padding: 120px 60px; }
.work-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.work-card { border-radius: 10px; overflow: hidden; background: var(--surface); border: 1px solid var(--border); transition: var(--transition); cursor: none; box-shadow: var(--shadow); }
.work-card:hover { transform: translateY(-6px); border-color: var(--accent); box-shadow: var(--shadow-md); }
.work-card.featured { grid-column: span 2; }
.work-img { width: 100%; height: 260px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.work-card.featured .work-img { height: 380px; }
.work-card:nth-child(1) .work-img { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%); }
.work-card:nth-child(2) .work-img { background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%); }
.work-card:nth-child(3) .work-img { background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%); }
.work-card:nth-child(4) .work-img { background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%); }
.work-shape { position: absolute; border-radius: 50%; opacity: 0.5; }
.shape-a { width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,255,255,0.6), transparent); top: -40px; right: -40px; }
.shape-b { width: 300px; height: 300px; background: radial-gradient(circle, rgba(255,255,255,0.5), transparent); bottom: -60px; left: -60px; }
.shape-c { width: 180px; height: 180px; background: radial-gradient(circle, rgba(255,255,255,0.5), transparent); top: 20px; left: 50%; }
.shape-d { width: 250px; height: 250px; background: radial-gradient(circle, rgba(255,255,255,0.5), transparent); bottom: -30px; right: -30px; }
.work-label { font-family: var(--font-display); font-size: 3rem; color: rgba(30,60,100,0.15); letter-spacing: 0.15em; z-index: 1; position: relative; }
.work-card.featured .work-label { font-size: 5rem; }
.work-info { padding: 24px; display: flex; flex-direction: column; gap: 8px; background: var(--surface); }
.work-info h3 { font-size: 1.1rem; color: var(--text-main); }
.work-info p { font-size: 0.88rem; color: var(--text-muted); font-weight: 300; }
.tag { display: inline-block; font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.12em; color: var(--accent-dark); background: var(--accent-dim); border: 1px solid var(--border-mid); padding: 4px 10px; border-radius: 100px; width: fit-content; }

/* ---- SERVICES ---- */
.services { background: var(--surface-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.services-inner { max-width: 1200px; margin: 0 auto; padding: 120px 60px; }
.services-list { display: flex; flex-direction: column; }
.service-item { display: flex; align-items: center; gap: 32px; padding: 32px 16px; border-bottom: 1px solid var(--border); cursor: none; transition: var(--transition); border-radius: var(--radius); }
.service-item:first-child { border-top: 1px solid var(--border); }
.service-item:hover { background: var(--surface); padding-left: 28px; box-shadow: var(--shadow); }
.service-item:hover .service-arrow { color: var(--accent); transform: translateX(8px); }
.service-num { font-family: var(--font-mono); font-size: 0.70rem; color: var(--accent); letter-spacing: 0.1em; min-width: 40px; }
.service-body { flex: 1; }
.service-body h3 { margin-bottom: 6px; color: var(--text-main); }
.service-body p { color: var(--text-muted); font-size: 0.88rem; font-weight: 300; }
.service-arrow { font-size: 1.4rem; color: var(--text-light); transition: var(--transition); }

/* ---- PROCESS ---- */
.process { max-width: 1200px; margin: 0 auto; padding: 120px 60px; }
.process-steps { display: flex; align-items: flex-start; gap: 16px; }
.process-step { flex: 1; text-align: center; padding: 40px 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; transition: var(--transition); box-shadow: var(--shadow); }
.process-step:hover { border-color: var(--accent); box-shadow: var(--shadow-md); transform: translateY(-4px); background: linear-gradient(160deg, #f0f7ff, var(--surface)); }
.process-icon { font-size: 2rem; color: var(--accent); margin-bottom: 16px; }
.process-step h4 { font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.05em; margin-bottom: 10px; color: var(--text-main); }
.process-step p { font-size: 0.86rem; color: var(--text-muted); font-weight: 300; }
.process-connector { color: var(--border-mid); font-size: 1.5rem; padding-top: 52px; flex-shrink: 0; }

/* ---- ABOUT ---- */
.about { background: var(--white); }
.about-inner { max-width: 1200px; margin: 0 auto; padding: 120px 60px; display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
.about-visual { position: relative; }
.about-card { background: linear-gradient(135deg, #eef4fb 0%, #dbeafe 100%); border: 1px solid var(--border); border-radius: 14px; padding: 60px 40px; text-align: center; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; box-shadow: var(--shadow-md); }
.about-logo-big { font-family: var(--font-display); font-size: 6rem; color: var(--accent); letter-spacing: 0.1em; }
.about-tagline { font-family: var(--font-display); font-size: 1.8rem; color: var(--text-muted); line-height: 1.3; letter-spacing: 0.05em; }
.about-badge { position: absolute; bottom: -28px; right: -28px; width: 110px; height: 110px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: spin 12s linear infinite; color: #fff; font-size: 0; box-shadow: 0 4px 20px rgba(74,158,221,0.35); }
.about-badge svg { position: absolute; width: 110px; height: 110px; }
.badge-center { font-size: 1.8rem; position: relative; z-index: 1; animation: spinReverse 12s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes spinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
.about-text .section-tag { margin-bottom: 16px; }
.about-text h2 { margin-bottom: 24px; }
.about-text p { color: var(--text-muted); font-weight: 300; margin-bottom: 16px; }
.about-values { display: flex; flex-direction: column; gap: 12px; margin: 32px 0; }
.value { display: flex; align-items: center; gap: 12px; font-size: 0.95rem; color: var(--text-main); }
.value-dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; flex-shrink: 0; }

/* ---- TESTIMONIALS ---- */
.testimonials { background: var(--surface-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 120px 0; }
.testimonials .section-header { padding: 0 60px; }
.testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1400px; margin: 0 auto; padding: 0 60px; }
.testi-card { padding: 36px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; transition: var(--transition); box-shadow: var(--shadow); }
.testi-card:hover { border-color: var(--accent); box-shadow: var(--shadow-md); }
.testi-card.featured { background: linear-gradient(160deg, #eef4fb, var(--surface)); border-color: var(--accent); }
.testi-stars { color: var(--accent); letter-spacing: 2px; margin-bottom: 20px; font-size: 0.85rem; }
.testi-card p { font-size: 0.92rem; color: var(--text-muted); font-weight: 300; font-style: italic; margin-bottom: 24px; line-height: 1.75; }
.testi-author { display: flex; align-items: center; gap: 14px; }
.testi-avatar { width: 40px; height: 40px; background: var(--accent); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 0.68rem; flex-shrink: 0; }
.testi-author strong { display: block; font-size: 0.9rem; color: var(--text-main); }
.testi-author span { font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono); }

/* ---- CONTACT ---- */
.contact { background: var(--surface-2); }
.contact-inner { max-width: 1200px; margin: 0 auto; padding: 120px 60px; display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
.contact-left .section-tag { margin-bottom: 16px; }
.contact-left h2 { margin-bottom: 24px; }
.contact-left p { color: var(--text-muted); font-weight: 300; margin-bottom: 32px; }
.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-links a { font-family: var(--font-mono); font-size: 0.80rem; color: var(--accent-dark); letter-spacing: 0.06em; transition: color 0.2s; }
.contact-links a:hover { color: var(--text-main); }
.contact-form { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 40px; display: flex; flex-direction: column; gap: 20px; box-shadow: var(--shadow); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-muted); }
.form-group input, .form-group select, .form-group textarea { background: var(--surface-2); border: 1.5px solid var(--border); border-radius: var(--radius); padding: 13px 16px; color: var(--text-main); font-family: var(--font-body); font-size: 0.9rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s; cursor: none; }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(74,158,221,0.12); background: var(--surface); }
.form-group select { appearance: none; }
.form-group textarea { resize: vertical; min-height: 120px; }
input::placeholder, textarea::placeholder { color: var(--text-light); }
.form-success { display: none; background: rgba(74,158,221,0.1); border: 1px solid var(--accent); border-radius: var(--radius); padding: 14px 20px; font-family: var(--font-mono); font-size: 0.76rem; color: var(--accent-dark); letter-spacing: 0.06em; }
.form-success.show { display: block; }

/* ---- FOOTER ---- */
.footer { background: var(--surface); border-top: 1px solid var(--border); padding: 40px 0 24px; }
.footer-top { max-width: 1200px; margin: 0 auto; padding: 0 60px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
.footer-logo { font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.1em; color: var(--text-main); }
.footer-links { display: flex; gap: 32px; }
.footer-links a { font-family: var(--font-mono); font-size: 0.70rem; letter-spacing: 0.1em; color: var(--text-muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--accent); }
.footer-social a { font-family: var(--font-mono); font-size: 0.70rem; letter-spacing: 0.1em; color: var(--text-muted); padding: 8px 16px; border: 1px solid var(--border); border-radius: var(--radius); transition: var(--transition); }
.footer-social a:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
.footer-bottom { max-width: 1200px; margin: 0 auto; padding: 24px 60px 0; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.08em; color: var(--text-light); }

/* ---- REVEAL ---- */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ---- RESPONSIVE ---- */
@media (max-width: 1024px) {
  .nav { padding: 20px 40px; }
  .nav.scrolled { padding: 14px 40px; }
  .hero-content { padding: 0 40px 160px; }
  .stats-inner { padding: 0 40px; grid-template-columns: repeat(2, 1fr); }
  .work { padding: 80px 40px; }
  .services-inner, .process, .about-inner, .contact-inner { padding-left: 40px; padding-right: 40px; }
  .testi-grid, .testimonials .section-header { padding-left: 40px; padding-right: 40px; }
  .about-inner { grid-template-columns: 1fr; }
  .about-visual { max-width: 400px; }
  .contact-inner { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .cursor, .cursor-dot { display: none; }
  body { cursor: auto; }
  a, button { cursor: pointer; }
  .nav { padding: 20px 24px; }
  .nav.scrolled { padding: 14px 24px; }
  .nav-links { display: none; }
  .nav-menu-btn { display: flex; }
  h1 { font-size: clamp(3.5rem, 14vw, 6rem); }
  h2 { font-size: clamp(2rem, 7vw, 3rem); }
  .hero-content { padding: 0 24px 160px; }
  .hero-scroll { display: none; }
  .stats-inner { grid-template-columns: repeat(2, 1fr); padding: 0 24px; }
  .stat + .stat::before { display: none; }
  .work { padding: 80px 24px; }
  .work-grid { grid-template-columns: 1fr; }
  .work-card.featured { grid-column: span 1; }
  .services-inner { padding: 80px 24px; }
  .process { padding: 80px 24px; }
  .process-steps { flex-direction: column; }
  .process-connector { display: none; }
  .about-inner { padding: 80px 24px; gap: 40px; }
  .testimonials { padding: 80px 0; }
  .testi-grid, .testimonials .section-header { padding-left: 24px; padding-right: 24px; }
  .testi-grid { grid-template-columns: 1fr; }
  .contact-inner { padding: 80px 24px; gap: 40px; }
  .contact-form { padding: 28px 20px; }
  .form-row { grid-template-columns: 1fr; }
  .footer-top { flex-direction: column; gap: 24px; text-align: center; padding: 0 24px; }
  .footer-bottom { padding: 24px 24px 0; flex-direction: column; gap: 8px; text-align: center; }
}

