import './styles.css';
import { projects } from './content';
import { esc, statusBadge } from './util';
import { initWorld } from './world';
import { renderQuick } from './quick';

const dialog = document.getElementById('project-dialog') as HTMLDialogElement;
const quick = document.getElementById('quick')!;
const worldMode = document.getElementById('world-mode')!;
const toggle = document.getElementById('mode-toggle')!;
const hud = document.getElementById('hud')!;

function openProject(id: string) {
  const p = projects.find((q) => q.id === id);
  if (!p) return;
  const links = [
    p.live ? `<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener">${p.zone === 'security' ? 'Product site' : 'Live site'} ↗</a>` : '',
    p.repo ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">View code ↗</a>` : '',
  ].join('');
  dialog.style.setProperty('--c', p.color);
  dialog.innerHTML = `
    <div class="pd-inner">
      <button class="pd-close" type="button" aria-label="Close">✕</button>
      <p class="pd-kicker">${p.zone === 'security' ? 'Firewall Fortress' : p.zone === 'devops' ? 'Pipeline Works' : p.zone === 'client' ? 'ASVEX Studio' : 'Build District'}</p>
      <h2 id="pd-title">${esc(p.name)}${statusBadge(p.status)}</h2>
      <p class="pd-tag">${esc(p.tagline)}</p>
      ${p.shot ? `<figure class="pd-shot"><img src="${p.shot}" alt="${p.mockup ? 'Design mockup' : 'Screenshot'} of ${esc(p.name)}" loading="lazy" />${p.mockup ? '<figcaption>Design mockup of the app’s interface</figcaption>' : ''}</figure>` : ''}
      <h3>Highlights</h3>
      <ul class="ticks">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      <h3>Stack</h3>
      <ul class="chips">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      ${p.status === 'private' ? `<p class="pd-note">${p.note ? esc(p.note) + ' ' : 'The source code is private. '}Happy to walk through the architecture in an interview.</p>` : ''}
      ${links ? `<div class="pd-links">${links}</div>` : ''}
    </div>`;
  dialog.showModal();
}

dialog.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (t === dialog || t.closest('.pd-close')) dialog.close();
});

const world = initWorld(openProject);
renderQuick(quick);
let worldScroll = 0;

function setMode(mode: 'world' | 'quick', push = true) {
  const isQuick = mode === 'quick';
  if (isQuick === document.body.classList.contains('mode-quick')) return;
  if (isQuick) worldScroll = window.scrollY;
  document.body.classList.toggle('mode-quick', isQuick);
  quick.hidden = !isQuick;
  worldMode.hidden = isQuick;
  hud.classList.toggle('hud-quick', isQuick);
  toggle.textContent = isQuick ? '▶ Play mode' : 'Quick view';
  if (push) history.replaceState(null, '', isQuick ? '#quick' : location.pathname);
  if (isQuick) {
    window.scrollTo(0, 0);
    quick.querySelector('h1')?.setAttribute('tabindex', '-1');
    (quick.querySelector('h1') as HTMLElement | null)?.focus({ preventScroll: true });
  } else {
    world.measure();
    window.scrollTo(0, worldScroll);
  }
}

toggle.addEventListener('click', () => setMode(document.body.classList.contains('mode-quick') ? 'world' : 'quick'));

document.addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLElement>('[data-mode]');
  if (t) {
    e.preventDefault();
    setMode(t.dataset.mode as 'world' | 'quick');
    if (t.dataset.mode === 'world' && t.classList.contains('hud-logo')) world.goToZone(0);
  }
  const p = (e.target as HTMLElement).closest<HTMLElement>('#quick [data-project]');
  if (p) openProject(p.dataset.project!);
});

window.addEventListener('hashchange', () => setMode(location.hash === '#quick' ? 'quick' : 'world', false));
if (location.hash === '#quick') setMode('quick', false);
