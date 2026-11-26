import {
  profile, experience, skills, projects, pipelineStages, credentials, type Project,
} from './content';
import { heroSprite, cloudSvg, treeSvg, flagSvg, shieldSvg, trophySvg } from './sprite';
import { esc, statusBadge } from './util';

// ───────────────────────── markup ─────────────────────────

const sign = (n: number, title: string) =>
  `<div class="signpost" aria-hidden="true"><div class="signpost-board"><small>ZONE ${n}</small>${title}</div><div class="signpost-pole"></div></div>`;

function bootZone() {
  const name = profile.name.toUpperCase().split(' ');
  return `
  <section class="zone zone-boot" data-zone="boot" data-title="Boot" aria-label="Introduction">
    <div class="boot-card">
      <p class="boot-prompt"><span>$</span> ./shahiq --start</p>
      <h1 class="boot-title" aria-label="${esc(profile.name)}">
        <span class="t1">${name[0]}</span><span class="t2">${name[1]}</span>
      </h1>
      <p class="boot-role">${esc(profile.title)}</p>
      <ul class="boot-focus">${profile.focus.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      <p class="boot-stack">${profile.stackLine.map(esc).join(' · ')}</p>
      <p class="boot-cta"><span class="blink">▶</span> Scroll to start
        <span class="boot-or">or <a href="#quick" data-mode="quick">open the 30-second résumé</a></span></p>
    </div>
    <div class="tree-cluster" aria-hidden="true">${treeSvg()}${treeSvg()}</div>
  </section>`;
}

function aboutZone() {
  return `
  <section class="zone zone-about" data-zone="about" data-title="Origin" aria-labelledby="about-h">
    ${sign(1, 'Origin')}
    <div class="house" aria-hidden="true"><div class="house-roof"></div><div class="house-body"><i></i><i></i><b></b></div></div>
    <article class="panel panel-about">
      <h2 id="about-h" class="panel-h">Hi, I'm Shahiq.</h2>
      <p>${esc(profile.summary)}</p>
      <dl class="facts">${profile.facts.map((f) => `<div><dt>${esc(f.k)}</dt><dd>${esc(f.v)}</dd></div>`).join('')}</dl>
    </article>
    <div class="tree-cluster" aria-hidden="true">${treeSvg()}</div>
  </section>`;
}

function experienceZone() {
  const cps = experience
    .map((j, i) => `
      <div class="checkpoint">
        <article class="panel panel-job">
          <p class="job-when">${esc(j.when)}</p>
          <h3>${esc(j.role)}</h3>
          <p class="job-org">${j.orgUrl ? `<a href="${j.orgUrl}" target="_blank" rel="noopener">${esc(j.org)}</a>` : esc(j.org)}</p>
          <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        </article>
        <div class="cp-flag" aria-hidden="true">${flagSvg(i === 0 ? '#1f9e8f' : '#e63957')}</div>
      </div>`)
    .join('');
  return `
  <section class="zone zone-exp" data-zone="exp" data-title="Experience" aria-labelledby="exp-h">
    ${sign(2, 'Experience Road')}
    <h2 id="exp-h" class="sr-only">Experience</h2>
    ${cps}
  </section>`;
}

function skillsZone() {
  const groups = skills
    .map((g) => `
      <div class="forge-group">
        <h3 class="forge-h"><span aria-hidden="true">${g.icon}</span> ${esc(g.name)}</h3>
        <ul class="blocks">${g.items.map((s) => `<li class="block" data-block>${esc(s)}</li>`).join('')}</ul>
      </div>`)
    .join('');
  return `
  <section class="zone zone-skills" data-zone="skills" data-title="Stack Forge" aria-labelledby="skills-h">
    ${sign(3, 'The Stack Forge')}
    <div class="forge-intro panel panel-small">
      <h2 id="skills-h" class="panel-h">The Stack Forge</h2>
      <p>Walk under the blocks to collect the tools I build with.</p>
    </div>
    ${groups}
  </section>`;
}

function building(p: Project, i: number) {
  const heights = [78, 92, 70, 86, 74, 95, 82];
  const h = heights[i % heights.length];
  return `
    <button class="building ${p.zone === 'client' ? 'building-studio' : ''}" type="button" data-project="${p.id}"
      style="--c:${p.color};--h:${h}%" aria-label="${esc(p.name)}: ${esc(p.tagline)} Open details">
      <span class="b-roof"><span class="b-sign">${esc(p.name)}</span></span>
      <span class="b-face">
        <span class="b-windows" aria-hidden="true"></span>
        <span class="b-plaque">${esc(p.tagline)}${statusBadge(p.status)}</span>
        <span class="b-door">Enter ▸</span>
      </span>
    </button>`;
}

function buildZone() {
  const own = projects.filter((p) => p.zone === 'build');
  const client = projects.filter((p) => p.zone === 'client');
  return `
  <section class="zone zone-build" data-zone="build" data-title="Build District" aria-labelledby="build-h">
    ${sign(4, 'Build District')}
    <div class="panel panel-small district-intro">
      <h2 id="build-h" class="panel-h">Build District</h2>
      <p>Full-stack products. Click a building to step inside.</p>
    </div>
    <div class="skyline">${own.map(building).join('')}</div>
    <div class="studio-lot">
      <p class="neon" aria-hidden="true">ASVEX STUDIO</p>
      <div class="skyline">${client.map((p, i) => building(p, i + 5)).join('')}</div>
    </div>
  </section>`;
}

function securityZone() {
  const towers = projects
    .filter((p) => p.zone === 'security')
    .map((p) => `
      <button class="tower" type="button" data-project="${p.id}" style="--c:${p.color}" aria-label="${esc(p.name)}: ${esc(p.tagline)} Open details">
        <span class="t-top" aria-hidden="true"></span>
        <span class="t-body">
          <span class="t-name">${esc(p.name)}</span>
          <span class="t-tag">${esc(p.tagline)}</span>
          <span class="t-stack">${p.stack.slice(0, 3).map(esc).join(' · ')}</span>
          <span class="b-door">Enter ▸</span>
        </span>
      </button>`)
    .join('');
  return `
  <section class="zone zone-security" data-zone="security" data-title="Firewall Fortress" aria-labelledby="sec-h">
    ${sign(5, 'Firewall Fortress')}
    <article class="panel panel-sec">
      <div class="sec-shield">${shieldSvg()}</div>
      <h2 id="sec-h" class="panel-h">Security is the job, not a feature.</h2>
      <ul class="ticks">
        <li>Building a multi-tenant <b>GRC platform</b> at work: ISO 27001 policies, Statement of Applicability, risk and evidence workflows.</li>
        <li>Integrations around <b>asset inventory, SIEM, SOAR</b> and endpoint security.</li>
        <li>Auth done properly: <b>Argon2id, rotating refresh tokens, MFA, RBAC, audit logs</b>.</li>
      </ul>
      <p class="studying"><span class="pulse" aria-hidden="true"></span> Currently studying: <b>${credentials.inProgress.map(esc).join('</b> and <b>')}</b></p>
    </article>
    <div class="fortress">
      <div class="wall" aria-hidden="true"></div>
      ${towers}
    </div>
  </section>`;
}

function devopsZone() {
  const kiosks = projects
    .filter((p) => p.zone === 'devops')
    .map((p) => `
      <button class="kiosk" type="button" data-project="${p.id}" style="--c:${p.color}" aria-label="${esc(p.name)}: ${esc(p.tagline)} Open details">
        <span class="k-screen"><span class="k-name">${esc(p.name)}</span><span class="k-tag">${esc(p.tagline)}</span>
          <span class="k-stack">${p.stack.map(esc).join(' · ')}</span></span>
        <span class="b-door">Enter ▸</span>
      </button>`)
    .join('');
  const stages = pipelineStages
    .map((s, i) => `<li class="machine" style="--i:${i}"><span class="m-light" aria-hidden="true"></span>${esc(s)}</li>`)
    .join('');
  return `
  <section class="zone zone-devops" data-zone="devops" data-title="Pipeline Works" aria-labelledby="dev-h">
    ${sign(6, 'Pipeline Works')}
    <article class="panel panel-small">
      <h2 id="dev-h" class="panel-h">Pipeline Works</h2>
      <p>Code goes in, tested, scanned and containerized software comes out, with a rollback ready.</p>
      <p class="mono-line">Docker · Compose · Jenkins · Nginx · GitHub Actions · Vercel</p>
    </article>
    <div class="factory">
      <ol class="machines" aria-label="Pipeline stages">${stages}</ol>
      <div class="belt" id="belt" aria-hidden="true">
        <div class="belt-crates">${'<span class="crate"></span>'.repeat(14)}</div>
      </div>
    </div>
    <div class="kiosks">${kiosks}</div>
  </section>`;
}

function trainingZone() {
  const earned = credentials.earned
    .map((c) => `<li class="pedestal"><span class="trophy">${trophySvg()}</span><span class="ped-label">${esc(c)}</span></li>`)
    .join('');
  const wip = credentials.inProgress
    .map((c) => `<li class="pedestal pedestal-wip"><span class="trophy"><span class="loading" aria-hidden="true"><i></i></span></span><span class="ped-label">${esc(c)}<em>In progress</em></span></li>`)
    .join('');
  return `
  <section class="zone zone-train" data-zone="train" data-title="Hall of Credentials" aria-labelledby="train-h">
    ${sign(7, 'Hall of Credentials')}
    <article class="panel panel-small">
      <h2 id="train-h" class="panel-h">Certifications & training</h2>
      <ul class="chips">${credentials.training.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </article>
    <ul class="pedestals">${wip}${earned}</ul>
  </section>`;
}

function contactZone() {
  return `
  <section class="zone zone-contact" data-zone="contact" data-title="Summit" aria-labelledby="contact-h">
    ${sign(8, 'Summit')}
    <div class="summit" aria-hidden="true"><div class="summit-hill"></div><div class="summit-flag">${flagSvg('#ffcf3f')}</div></div>
    <article class="panel panel-contact">
      <p class="boot-prompt"><span>$</span> deploy --target=your-team</p>
      <h2 id="contact-h" class="panel-h big">Let's build something secure.</h2>
      <p>I'm open to full-stack, security-focused and DevOps roles. The fastest way to reach me is email.</p>
      <div class="contact-links">
        <a class="btn btn-primary" href="mailto:${profile.email}">${esc(profile.email)}</a>
        <a class="btn" href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" href="${profile.github}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn" href="${profile.resume}" download>Résumé PDF</a>
      </div>
      <p class="replay"><button type="button" class="linkish" id="replay">↺ Play again</button> · <a href="#quick" data-mode="quick">Quick view</a></p>
    </article>
  </section>`;
}

// ───────────────────────── scenery ─────────────────────────

function rand(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function ridgeSvg(width: number, height: number, seed: number, cls: string) {
  const r = rand(seed);
  const step = 16;
  let y = height * 0.55;
  let d = `M0 ${height} L0 ${y}`;
  for (let x = 0; x <= width; x += step) {
    y += (r() - 0.5) * 26;
    y = Math.max(height * 0.12, Math.min(height * 0.85, y));
    const yy = Math.round(y / 8) * 8; // stepped, pixel-ish ridge
    d += ` L${x} ${yy} L${x + step} ${yy}`;
  }
  d += ` L${width} ${height} Z`;
  return `<svg class="${cls}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true"><path d="${d}"/></svg>`;
}

function midSkyline(width: number, seed: number) {
  const r = rand(seed);
  let html = '';
  let x = 0;
  while (x < width) {
    if (r() < 0.45) {
      const s = 0.7 + r() * 0.8;
      html += `<span class="m-tree" style="left:${x}px;--s:${s.toFixed(2)}">${treeSvg()}</span>`;
      x += 60 + r() * 60;
    } else {
      const w = 40 + Math.round(r() * 5) * 12;
      const h = 60 + Math.round(r() * 8) * 14;
      html += `<span class="m-bld" style="left:${x}px;width:${w}px;height:${h}px"></span>`;
      x += w + 8 + r() * 40;
    }
  }
  return html;
}

function clouds(width: number, seed: number) {
  const r = rand(seed);
  let html = '';
  for (let x = 40; x < width; x += 220 + r() * 260) {
    const top = 8 + r() * 30;
    const s = 3 + Math.round(r() * 3);
    html += `<span class="cloud" style="left:${x}px;top:${top}%;--s:${s};--d:${(r() * 6).toFixed(1)}s">${cloudSvg()}</span>`;
  }
  return html;
}

// ───────────────────────── sky colours ─────────────────────────

type RGB = [number, number, number];
const hex = (h: string): RGB => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
const mix = (a: RGB, b: RGB, t: number) => a.map((v, i) => Math.round(v + (b[i] - v) * t)) as RGB;
const css = (c: RGB) => `rgb(${c[0]},${c[1]},${c[2]})`;

// t → [skyTop, skyBottom, ridgeFar, ridgeNear, midTone]
const KEYS: [number, string[]][] = [
  [0.0, ['#8fd3f7', '#fff1d6', '#a9c9b4', '#7fae8a', '#5f8f70']],
  [0.35, ['#58b7ee', '#cdeeff', '#9cc3ae', '#6ea37d', '#4f8463']],
  [0.62, ['#f5a15e', '#ffe0a0', '#c9977a', '#8c7656', '#6b5a43']],
  [0.82, ['#3e3270', '#f07b7b', '#6e5a8c', '#4a3f6c', '#3a3157']],
  [1.0, ['#0b1131', '#2b3270', '#262c58', '#1b2047', '#141938']],
];
const KEYS_RGB = KEYS.map(([t, cs]) => [t, cs.map(hex)] as [number, RGB[]]);

function skyAt(t: number): RGB[] {
  for (let i = 1; i < KEYS_RGB.length; i++) {
    const [t1, c1] = KEYS_RGB[i];
    const [t0, c0] = KEYS_RGB[i - 1];
    if (t <= t1) {
      const k = (t - t0) / (t1 - t0);
      return c0.map((c, j) => mix(c, c1[j], k));
    }
  }
  return KEYS_RGB[KEYS_RGB.length - 1][1];
}

// ───────────────────────── engine ─────────────────────────

type ZoneInfo = { id: string; title: string; start: number; el: HTMLElement };
type Block = { el: HTMLElement; x: number; hit: boolean };

export function initWorld(onOpenProject: (id: string) => void) {
  const $ = (id: string) => document.getElementById(id)!;
  const world = $('world');
  const stage = $('stage');
  const scroller = $('scroller');
  const hero = $('hero');
  const sky = $('sky');
  const stars = $('stars');
  const sun = $('sun');
  const zoneLabel = $('zone-label');
  const hudMap = $('hud-map');
  const coinCount = $('coin-count');
  const coinTotal = $('coin-total');
  const hint = $('hint');
  const layers = {
    clouds: $('layer-clouds'),
    far: $('layer-far'),
    mid: $('layer-mid'),
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  world.innerHTML =
    bootZone() + aboutZone() + experienceZone() + skillsZone() + buildZone() +
    securityZone() + devopsZone() + trainingZone() + contactZone() +
    '<div class="ground" aria-hidden="true"></div>';
  hero.innerHTML = `<div class="hero-sprite">${heroSprite()}</div><div class="hero-shadow"></div>`;

  // stars
  const sr = rand(7);
  stars.innerHTML = Array.from({ length: 90 }, () =>
    `<i style="left:${(sr() * 100).toFixed(2)}%;top:${(sr() * 62).toFixed(2)}%;--d:${(sr() * 3).toFixed(2)}s"></i>`).join('');
  const moon = document.createElement('div');
  moon.className = 'moon';
  stage.insertBefore(moon, sun.nextSibling);

  let zones: ZoneInfo[] = [];
  let blocks: Block[] = [];
  let maxX = 0;
  let vw = 0;
  let heroX = 0;
  let x = 0;
  let lastX = 0;
  let dist = 0;
  let idleTimer = 0;
  let hopUntil = 0;
  let ticking = false;
  const belt = document.getElementById('belt');

  function measure() {
    vw = window.innerWidth;
    const vh = stage.clientHeight;
    const worldW = world.scrollWidth;
    maxX = Math.max(0, worldW - vw);
    scroller.style.height = `${maxX + vh}px`;
    heroX = vw < 700 ? Math.round(vw * 0.1) : Math.round(Math.min(vw * 0.22, 300));
    hero.style.left = `${heroX}px`;

    const cur = x;
    zones = [...world.querySelectorAll<HTMLElement>('.zone')].map((el) => ({
      id: el.dataset.zone!, title: el.dataset.title!, start: el.offsetLeft, el,
    }));
    const prevHit = new Set(blocks.filter((b) => b.hit).map((b) => b.el));
    blocks = [...world.querySelectorAll<HTMLElement>('[data-block]')].map((el) => {
      const r = el.getBoundingClientRect();
      return { el, x: r.left + cur + r.width / 2, hit: prevHit.has(el) };
    });
    coinTotal.textContent = String(blocks.length);

    // parallax scenery sized to what each layer will travel
    const farW = Math.ceil(maxX * 0.18 + vw + 64);
    const midW = Math.ceil(maxX * 0.45 + vw + 64);
    const cloudW = Math.ceil(maxX * 0.08 + vw + 64);
    layers.far.innerHTML = ridgeSvg(farW, 260, 11, 'ridge ridge-far') + ridgeSvg(farW, 200, 23, 'ridge ridge-near');
    layers.mid.innerHTML = midSkyline(midW, 5);
    layers.mid.style.width = `${midW}px`;
    layers.clouds.innerHTML = clouds(cloudW, 3);

    hudMap.innerHTML = zones
      .map((z, i) => `<button type="button" data-goto="${i}" title="${esc(z.title)}" aria-label="Go to ${esc(z.title)}"></button>`)
      .join('');
    update(true);
  }

  function setFrame(name: 'idle' | 'walkA' | 'walkB') {
    hero.dataset.frame = name;
  }

  function update(force = false) {
    ticking = false;
    x = Math.min(Math.max(window.scrollY, 0), maxX);
    const dx = x - lastX;
    if (!force && Math.abs(dx) < 0.1) return;

    world.style.transform = `translate3d(${-x}px,0,0)`;
    layers.clouds.style.transform = `translate3d(${-x * 0.08}px,0,0)`;
    layers.far.style.transform = `translate3d(${-x * 0.18}px,0,0)`;
    layers.mid.style.transform = `translate3d(${-x * 0.45}px,0,0)`;
    if (belt) {
      const b = x * 0.6;
      belt.style.setProperty('--belt-bg', `${b.toFixed(1)}px`);
      belt.style.setProperty('--belt-c', `${(b % 74).toFixed(1)}px`);
    }

    const t = maxX ? x / maxX : 0;
    const [top, bottom, rf, rn, mt] = skyAt(t);
    sky.style.background = `linear-gradient(180deg, ${css(top)} 0%, ${css(bottom)} 100%)`;
    stage.style.setProperty('--ridge-far', css(rf));
    stage.style.setProperty('--ridge-near', css(rn));
    stage.style.setProperty('--mid', css(mt));
    const night = Math.max(0, Math.min(1, (t - 0.72) / 0.22));
    stage.style.setProperty('--night', night.toFixed(3));
    stars.style.opacity = night.toFixed(3);
    const sunT = Math.min(1, t / 0.86);
    sun.style.transform = `translate3d(${(sunT * 30).toFixed(1)}vw, ${(sunT * 62).toFixed(1)}svh, 0)`;
    sun.style.opacity = String(1 - Math.max(0, (t - 0.8) / 0.08));
    moon.style.opacity = String(Math.max(0, (t - 0.84) / 0.12));

    // hero
    const heroWorld = x + heroX + 28;
    if (Math.abs(dx) > 0.1) {
      dist += Math.abs(dx);
      hero.classList.toggle('flip', dx < 0);
      if (!reduced.matches) setFrame(Math.floor(dist / 22) % 2 ? 'walkA' : 'walkB');
      clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setFrame('idle'), 140);
    }

    // skill blocks
    let got = 0;
    for (const b of blocks) {
      if (!b.hit && heroWorld >= b.x - 6) {
        b.hit = true;
        b.el.classList.add('hit');
        if (!reduced.matches && performance.now() > hopUntil) {
          hopUntil = performance.now() + 340;
          hero.classList.remove('hop');
          void hero.offsetWidth;
          hero.classList.add('hop');
        }
      }
      if (b.hit) got++;
    }
    coinCount.textContent = String(got);

    // zone
    let zi = 0;
    zones.forEach((z, i) => { if (heroWorld >= z.start) zi = i; });
    const zname = zones[zi]?.title ?? '';
    if (zoneLabel.textContent !== zname) zoneLabel.textContent = zname;
    hudMap.querySelectorAll('button').forEach((btn, i) => btn.classList.toggle('on', i <= zi));
    hudMap.style.setProperty('--p', t.toFixed(4));

    hint.classList.toggle('gone', x > 30);
    lastX = x;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => update());
    }
  }

  function goToZone(i: number) {
    const z = zones[i];
    if (!z) return;
    window.scrollTo({ top: Math.min(maxX, Math.max(0, z.start - 8)), behavior: reduced.matches ? 'auto' : 'smooth' });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  let rt = 0;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = window.setTimeout(measure, 120);
  });

  window.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('mode-quick')) return;
    if ((e.target as HTMLElement).closest('dialog, input, textarea')) return;
    const step = Math.round(window.innerWidth * 0.55);
    if (e.key === 'ArrowRight') { e.preventDefault(); window.scrollBy({ top: step, behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); window.scrollBy({ top: -step, behavior: 'smooth' }); }
  });

  // Focusing a link/button off-screen should bring it into view in world space
  world.addEventListener('focusin', (e) => {
    const el = e.target as HTMLElement;
    const r = el.getBoundingClientRect();
    if (r.left < heroX || r.right > window.innerWidth - 24) {
      const wx = r.left + x;
      window.scrollTo({ top: Math.min(maxX, Math.max(0, wx - heroX - 80)), behavior: 'auto' });
    }
  });

  hudMap.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-goto]');
    if (b) goToZone(Number(b.dataset.goto));
  });

  world.addEventListener('click', (e) => {
    const p = (e.target as HTMLElement).closest<HTMLElement>('[data-project]');
    if (p) onOpenProject(p.dataset.project!);
    if ((e.target as HTMLElement).id === 'replay') goToZone(0);
  });

  setFrame('idle');
  document.fonts?.ready.then(measure);
  measure();

  return { measure, goToZone };
}
