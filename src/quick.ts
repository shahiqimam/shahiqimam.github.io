import { profile, experience, skills, projects, credentials, education, type Project } from './content';
import { esc, statusBadge } from './util';

function projectCard(p: Project) {
  const links = [
    p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live ↗</a>` : '',
    p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Code ↗</a>` : '',
  ].join('');
  return `
    <article class="q-proj" style="--c:${p.color}">
      <h4><button type="button" class="linkish" data-project="${p.id}">${esc(p.name)}</button>${statusBadge(p.status)}</h4>
      <p>${esc(p.tagline)}</p>
      <p class="q-stack">${p.stack.map(esc).join(' · ')}</p>
      ${links ? `<p class="q-links">${links}</p>` : ''}
    </article>`;
}

export function renderQuick(root: HTMLElement) {
  const group = (zone: Project['zone'][], title: string) =>
    `<h3 class="q-sub">${title}</h3><div class="q-grid">${projects.filter((p) => zone.includes(p.zone)).map(projectCard).join('')}</div>`;

  root.innerHTML = `
  <div class="q-wrap">
    <div class="q-bar">
      <button type="button" class="btn" data-mode="world">▶ Play the interactive version</button>
      <button type="button" class="btn btn-ghost" onclick="window.print()">Print</button>
    </div>
    <header class="q-head">
      <h1>${esc(profile.name)}</h1>
      <p class="q-title">${esc(profile.title)} · ${profile.focus.slice(1).map(esc).join(' & ')}</p>
      <p class="q-meta">${esc(profile.location)} ·
        <a href="mailto:${profile.email}">${esc(profile.email)}</a> ·
        <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a> ·
        <a href="${profile.github}" target="_blank" rel="noopener">GitHub</a> ·
        <a href="${profile.resume}" download>Résumé PDF</a></p>
    </header>

    <section><h2>Profile</h2><p>${esc(profile.summary)}</p>
      <p class="q-studying"><span class="pulse" aria-hidden="true"></span> Currently studying ${credentials.inProgress.map(esc).join(' and ')}.</p></section>

    <section><h2>Experience</h2>
      ${experience.map((j) => `
        <div class="q-job">
          <div class="q-job-h"><h3>${esc(j.role)} · ${j.orgUrl ? `<a href="${j.orgUrl}" target="_blank" rel="noopener">${esc(j.org)}</a>` : esc(j.org)}</h3><span>${esc(j.when)}</span></div>
          <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        </div>`).join('')}
    </section>

    <section><h2>Projects</h2>
      ${group(['security'], 'Security & GRC')}
      ${group(['devops'], 'DevOps')}
      ${group(['build', 'client'], 'Full-stack products')}
      <p class="q-note">“Private code” projects are shown with screenshots and details; their source isn't public.</p>
    </section>

    <section><h2>Skills</h2>
      <dl class="q-skills">${skills.map((g) => `<div><dt>${esc(g.name)}</dt><dd>${g.items.map(esc).join(', ')}</dd></div>`).join('')}</dl>
    </section>

    <section class="q-two">
      <div><h2>Certifications</h2><ul>
        ${credentials.inProgress.map((c) => `<li>${esc(c)} <em>(in progress)</em></li>`).join('')}
        ${credentials.earned.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
        <p class="q-small">Training: ${credentials.training.map(esc).join(', ')}.</p></div>
      <div><h2>Education</h2><ul>${education.map((e) => `<li><b>${esc(e.school)}</b>: ${esc(e.detail)}</li>`).join('')}</ul></div>
    </section>
  </div>`;
}
