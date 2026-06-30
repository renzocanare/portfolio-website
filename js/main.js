/**
 * main.js  —  All interactivity. You shouldn't need to edit
 *             this file — update js/data.js for content changes.
 */

/* ── Populate page from data.js ────────────────────────────── */

function parseBio(text) {
  // **bold** → <strong>
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function init() {
  // Title & meta
  document.title = `${SITE.name}`;

  // Nav logo
  document.querySelector('.nav-logo-name').textContent = SITE.domain.split('.')[0];
  document.querySelector('.nav-logo-tld').textContent  = '.' + SITE.domain.split('.').slice(1).join('.');

  // Hero
  document.getElementById('hero-title').textContent = SITE.title;
  document.getElementById('hero-status').textContent = SITE.status;
  const resumeBtn = document.getElementById('hero-resume');
  if (SITE.resume) {
    resumeBtn.href = SITE.resume;
  } else {
    resumeBtn.style.display = 'none';
  }
  document.getElementById('hero-github').href = SITE.github;
  document.getElementById('hero-linkedin').href = SITE.linkedin;
  startQuipRotator();

  const [firstName, ...rest] = SITE.name.split(' ');
  const lastName = rest.join(' ');
  document.getElementById('hero-name-first').textContent = firstName + ' ';
  document.getElementById('hero-name-last').textContent  = lastName;

  // Bio
  const bioEl = document.getElementById('about-bio');
  bioEl.innerHTML = SITE.bio
    .map(p => `<p>${parseBio(p)}</p>`)
    .join('');

  // At a glance
  const glanceEl = document.getElementById('glance-rows');
  glanceEl.innerHTML = SITE.glance
    .map(r => `
      <div class="glance-row">
        <span class="glance-key">${r.key}</span>
        <span class="glance-val">${r.val}</span>
      </div>`)
    .join('');

  // Social links in contact "elsewhere" card
  const lastSegment = url => url.split('/').filter(Boolean).pop();
  document.getElementById('contact-github').href        = SITE.github;
  document.getElementById('contact-github-handle').textContent = '@' + lastSegment(SITE.github) + ' ↗';
  document.getElementById('contact-linkedin').href      = SITE.linkedin;
  document.getElementById('contact-linkedin-handle').textContent = 'in/' + lastSegment(SITE.linkedin) + ' ↗';

  // Footer
  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${SITE.name} · ${SITE.domain}`;

  // Photos
  setupPhotos();

  // Skills
  const skillsEl = document.getElementById('skills-grid');
  skillsEl.innerHTML = SKILLS.map(g => `
    <div class="skill-group">
      <div class="skill-group-title">${g.title}</div>
      <div class="skill-tags">
        ${g.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>`).join('');

  // Experience
  const expEl = document.getElementById('timeline');
  expEl.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <h3 class="timeline-role">${e.role}</h3>
        <span class="timeline-company">@ ${e.company}</span>
      </div>
      <div class="timeline-period">${e.period}</div>
      <p class="timeline-desc">${e.desc}</p>
    </div>`).join('');

  // Certs — featured (full certifications) vs. compact coursework/modules
  const featuredCerts = CERTS.filter(c => c.category !== 'NUS-ISS Module');
  const moduleCerts    = CERTS.filter(c => c.category === 'NUS-ISS Module');

  const certsEl = document.getElementById('certs-grid');
  certsEl.innerHTML = featuredCerts.map(c => {
    const idx = CERTS.indexOf(c);
    return `
    <div class="cert-card" style="cursor:pointer;position:relative;" onclick="openCertModal(${idx})">
      ${c.category ? `<span class="cert-category-badge">${c.category}</span>` : ''}
      <div class="cert-icon">✦</div>
      <div style="flex:1;${c.category ? 'margin-top:22px;' : ''}">
        <h3 class="cert-name">${c.name}</h3>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-year">${c.year}</div>
        ${c.tags && c.tags.length ? `
          <div class="cert-tags">
            ${c.tags.map(t => `<span class="cert-tag">${t}</span>`).join('')}
          </div>` : ''}
      </div>
      <div class="cert-view-hint">click to view →</div>
    </div>`;
  }).join('');

  const modulesEl = document.getElementById('cert-modules-list');
  modulesEl.innerHTML = moduleCerts.map(c => {
    const idx = CERTS.indexOf(c);
    return `
    <div class="cert-module-row" onclick="openCertModal(${idx})">
      <div class="cert-module-main">
        <span class="cert-module-name">${c.name}</span>
        <span class="cert-module-meta">${c.issuer} · ${c.year}</span>
      </div>
      ${c.tags && c.tags.length ? `
        <div class="cert-tags cert-module-tags">
          ${c.tags.map(t => `<span class="cert-tag">${t}</span>`).join('')}
        </div>` : ''}
      <span class="cert-module-arrow">→</span>
    </div>`;
  }).join('');

  // Projects (initial render)
  renderProjects();
}

function setupPhotos() {
  const front = document.getElementById('photo-front');
  const back  = document.getElementById('photo-back');

  if (SITE.photoFormal) {
    front.innerHTML = `<img src="${SITE.photoFormal}" alt="${SITE.name} — formal photo">
      <div class="photo-flip-hint">tap to flip ↺</div>`;
  }
  if (SITE.photoCasual) {
    back.innerHTML = `<img src="${SITE.photoCasual}" alt="${SITE.name} — casual photo">
      <div class="photo-flip-hint">tap to flip ↺</div>`;
  }
}

/* ── Projects & filter ──────────────────────────────────────── */

let activeFilter = 'all';

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.kind === activeFilter);

  grid.innerHTML = filtered.map(p => {
    const idx = PROJECTS.indexOf(p);
    const thumb = p.shot
      ? `<img src="${p.shot}" alt="${p.name} screenshot">`
      : `<span class="project-thumb-label">[ screenshot ]</span>`;
    const codeLink = p.code
      ? `<a href="${p.code}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Code ↗</a>`
      : '';
    const liveLink = p.live
      ? `<a href="${p.live}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Live ↗</a>`
      : '';
    return `
      <div class="project-card" onclick="openModal(${idx})">
        <div class="project-thumb">
          ${thumb}
          <span class="project-kind">${p.kind}</span>
        </div>
        <div class="project-body">
          <h3 class="project-name">${p.name}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            ${codeLink}
            ${liveLink}
            <span class="project-case-link" style="margin-left:auto">Case study →</span>
          </div>
        </div>
      </div>`;
  }).join('');
}

document.getElementById('filter-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.filter-tab');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.toggle('active', b === btn));
  renderProjects();
});

/* ── Scroll lock (iOS-safe — body { overflow: hidden } alone lets
   Safari still pan/rubber-band the page behind a modal) ─────── */

let lockedScrollY = 0;
let lockCount = 0;

function lockScroll() {
  if (lockCount === 0) {
    lockedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top    = `-${lockedScrollY}px`;
    document.body.style.left   = '0';
    document.body.style.right  = '0';
    document.body.style.width  = '100%';
  }
  lockCount++;
}

function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.position = '';
    document.body.style.top    = '';
    document.body.style.left   = '';
    document.body.style.right  = '';
    document.body.style.width  = '';
    // Jump back instantly — html { scroll-behavior: smooth } would
    // otherwise animate the page sliding from the top back down to
    // where the modal was opened.
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, lockedScrollY);
    document.documentElement.style.scrollBehavior = prevBehavior;
  }
}

/* ── Modal ──────────────────────────────────────────────────── */

function openModal(idx) {
  const p = PROJECTS[idx];
  const thumb = document.getElementById('modal-thumb-img');
  if (p.shot) {
    thumb.innerHTML = `<img src="${p.shot}" alt="${p.name} screenshot">`;
  } else {
    thumb.innerHTML = `<span class="modal-thumb-label">[ screenshot ]</span>`;
  }
  document.getElementById('modal-kind').textContent    = p.kind;
  document.getElementById('modal-title').textContent   = p.name;
  document.getElementById('modal-problem').textContent = p.problem;
  document.getElementById('modal-role').textContent    = p.role;
  document.getElementById('modal-outcome').textContent = p.outcome;
  document.getElementById('modal-tags').innerHTML =
    p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  const codeBtn = document.getElementById('modal-code');
  const liveBtn = document.getElementById('modal-live');
  codeBtn.href = p.code || '#';
  liveBtn.href = p.live || '#';
  codeBtn.style.display = p.code ? '' : 'none';
  liveBtn.style.display = p.live ? '' : 'none';

  document.getElementById('modal').classList.add('open');
  lockScroll();
}

function closeModalBtn() {
  if (!document.getElementById('modal').classList.contains('open')) return;
  document.getElementById('modal').classList.remove('open');
  unlockScroll();
}

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModalBtn();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModalBtn(); closeCertModal(); } });

/* ── Photo flip ─────────────────────────────────────────────── */

const FLIP_EMOJIS = ['✨', '🎉', '😎', '🚀', '🎸', '📸', '☕', '🌊'];

function burstEmojis() {
  const burst = document.getElementById('emoji-burst');
  for (let i = 0; i < 14; i++) {
    const span = document.createElement('span');
    span.className = 'emoji-particle';
    span.textContent = FLIP_EMOJIS[Math.floor(Math.random() * FLIP_EMOJIS.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.fontSize = (14 + Math.random() * 10) + 'px';
    span.style.animationDuration = (1.3 + Math.random() * 0.7) + 's';
    span.style.animationDelay = (Math.random() * 0.25) + 's';
    span.addEventListener('animationend', () => span.remove());
    burst.appendChild(span);
  }
}

document.getElementById('photo-card').addEventListener('click', () => {
  const inner = document.getElementById('photo-inner');
  inner.classList.toggle('flipped');
  if (inner.classList.contains('flipped')) burstEmojis();
});

/* ── Contact form ───────────────────────────────────────────── */

document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const form      = e.target;
  const submitBtn = form.querySelector('.form-submit');
  const errorEl   = document.getElementById('form-error');
  errorEl.style.display = 'none';

  if (!SITE.contactEndpoint) {
    errorEl.textContent = 'Contact form isn\'t wired up yet — set SITE.contactEndpoint in data.js.';
    errorEl.style.display = '';
    return;
  }

  const payload = {
    name:    form.name.value,
    email:   form.email.value,
    message: form.message.value,
    company: form.company.value, // honeypot
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    const res = await fetch(SITE.contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send message.');

    form.style.display = 'none';
    document.getElementById('form-success').classList.add('visible');
  } catch (err) {
    errorEl.textContent = err.message || 'Something went wrong. Please try again later.';
    errorEl.style.display = '';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send message →';
  }
});

/* ── Hamburger menu ─────────────────────────────────────────── */

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.textContent = open ? '✕' : '☰';
});
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    hamburger.textContent = '☰';
  }
});

/* ── Scroll: progress bar + back-to-top ─────────────────────── */

const progressBar = document.getElementById('progress-bar');
const backToTop   = document.getElementById('back-to-top');

function updateScrollUI() {
  const sc  = document.documentElement;
  const max = sc.scrollHeight - window.innerHeight;
  const y   = window.scrollY || sc.scrollTop || document.body.scrollTop || 0;
  progressBar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
  backToTop.classList.toggle('visible', y > 600);
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

// IntersectionObserver as a second signal — covers cases where the
// scroll listener gets throttled (e.g. iOS momentum scrolling).
const scrollSentinel = document.getElementById('scroll-sentinel');
if (scrollSentinel) {
  const backToTopIO = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
      backToTop.classList.add('visible');
    }
  }, { threshold: 0 });
  backToTopIO.observe(scrollSentinel);
}

/* ── Active nav highlight ───────────────────────────────────── */

const navAnchors = document.querySelectorAll('.nav-links a[data-section]');
const sectionIo  = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a =>
        a.classList.toggle('active', a.dataset.section === entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

['home','about','skills','experience','projects','certs','contact'].forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionIo.observe(el);
});

/* ── Scroll reveal ──────────────────────────────────────────── */

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealIo.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealIo.observe(el));
  setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 1800);
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

/* ── Cert modal ─────────────────────────────────────────────── */

function openCertModal(idx) {
  const c = CERTS[idx];
  document.getElementById('cert-modal-issuer').textContent = c.issuer;
  document.getElementById('cert-modal-title').textContent  = c.name;
  document.getElementById('cert-modal-year').textContent   = c.year;

  const blurbEl = document.getElementById('cert-modal-blurb');
  blurbEl.textContent = c.blurb || '';
  blurbEl.style.display = c.blurb ? '' : 'none';

  const tagsEl = document.getElementById('cert-modal-tags');
  tagsEl.innerHTML = (c.tags || []).map(t => `<span class="cert-tag">${t}</span>`).join('');
  tagsEl.style.display = (c.tags && c.tags.length) ? '' : 'none';

  const imgWrap = document.getElementById('cert-modal-img-wrap');
  if (c.file && c.file.toLowerCase().endsWith('.pdf')) {
    imgWrap.className = 'cert-modal-img-wrap';
    imgWrap.innerHTML = `<embed src="${c.file}" type="application/pdf" title="${c.name}">`;
  } else if (c.file) {
    imgWrap.className = 'cert-modal-img-wrap';
    imgWrap.innerHTML = `<img src="${c.file}" alt="${c.name} certificate">`;
  } else {
    imgWrap.className = 'cert-modal-img-wrap empty';
    imgWrap.innerHTML = 'Drop a PDF or image into assets/certs/ and set the file path in data.js';
  }

  const link = document.getElementById('cert-modal-link');
  if (c.link) {
    link.href = c.link;
    link.style.display = '';
  } else {
    link.style.display = 'none';
  }

  document.getElementById('cert-modal').classList.add('open');
  lockScroll();
}

function closeCertModal() {
  if (!document.getElementById('cert-modal').classList.contains('open')) return;
  document.getElementById('cert-modal').classList.remove('open');
  unlockScroll();
}

document.getElementById('cert-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('cert-modal')) closeCertModal();
});

/* ── Hero quip rotator ─────────────────────────────────────── */

function startQuipRotator() {
  const el = document.getElementById('hero-quip');
  if (!el || !QUIPS || !QUIPS.length) return;
  let i = 0;
  const show = () => {
    el.textContent = QUIPS[i];
    el.classList.remove('quip-in');
    void el.offsetWidth; // restart the CSS animation
    el.classList.add('quip-in');
    i = (i + 1) % QUIPS.length;
  };
  show();
  setInterval(show, 4000);
}

/* ── Easter egg: 5 logo clicks or the Konami code ────────────── */

function triggerEasterEgg() {
  if (document.body.classList.contains('egg-active')) return;
  document.body.classList.add('egg-active');
  setTimeout(() => document.body.classList.remove('egg-active'), 1200);
}

let logoClicks = 0;
let logoClickTimer;
document.querySelector('.nav-logo').addEventListener('click', e => {
  logoClicks++;
  clearTimeout(logoClickTimer);
  logoClickTimer = setTimeout(() => { logoClicks = 0; }, 1500);
  if (logoClicks >= 5) {
    e.preventDefault();
    logoClicks = 0;
    triggerEasterEgg();
  }
});

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiProgress = 0;
document.addEventListener('keydown', e => {
  konamiProgress = (e.key === KONAMI[konamiProgress]) ? konamiProgress + 1 : 0;
  if (konamiProgress === KONAMI.length) {
    konamiProgress = 0;
    triggerEasterEgg();
  }
});

/* ── Kick everything off ────────────────────────────────────── */
init();
