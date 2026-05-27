(function () {
  const C = CONFIG;

  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

  const root = document.documentElement.style;
  const t = C.theme;
  root.setProperty('--navy', t.navy);
  root.setProperty('--navy-light', t.navyLight);
  root.setProperty('--gold', t.gold);
  root.setProperty('--gold-light', t.goldLight);
  root.setProperty('--cream', t.cream);

  document.title = C.brand.name;
  if (C.brand.favicon) $('favicon').href = C.brand.favicon;

  // ─── Navigation ──────────────────────────────────────────────
  const logoText = $('nav-logo-text');
  const logoImg = $('nav-logo-img');
  if (C.brand.logo) {
    logoImg.src = C.brand.logo;
    logoImg.classList.remove('hidden');
    logoText.classList.add('hidden');
  } else {
    logoText.textContent = C.brand.name;
  }

  const navLinks = $('nav-links');
  C.nav.links.forEach((link) => {
    const a = el('a', 'text-white/75 hover:text-[var(--gold)] text-sm tracking-widest uppercase transition-colors duration-200 font-medium');
    a.href = link.href;
    a.textContent = link.label;
    navLinks.appendChild(a);
  });

  const navCta = $('nav-cta');
  navCta.textContent = C.nav.ctaButton.text;
  navCta.href = C.nav.ctaButton.href;

  const mobileLinks = $('mobile-links');
  C.nav.links.forEach((link) => {
    const a = el('a', 'text-white/80 hover:text-[var(--gold)] text-base tracking-wide transition-colors py-1 border-b border-white/10');
    a.href = link.href;
    a.textContent = link.label;
    a.addEventListener('click', closeMobileMenu);
    mobileLinks.appendChild(a);
  });
  const mobileCta = el('a', 'mt-2 text-center py-3 text-sm font-medium tracking-widest uppercase border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-300 rounded-sm');
  mobileCta.href = C.nav.ctaButton.href;
  mobileCta.textContent = C.nav.ctaButton.text;
  mobileCta.addEventListener('click', closeMobileMenu);
  mobileLinks.appendChild(mobileCta);

  const hamburger = $('hamburger');
  const mobileMenu = $('mobile-menu');
  const hamOpen = $('ham-open');
  const hamClose = $('ham-close');
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamOpen.classList.remove('hidden');
    hamClose.classList.add('hidden');
  }
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamOpen.classList.toggle('hidden', isOpen);
    hamClose.classList.toggle('hidden', !isOpen);
  });

  const navbar = $('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('nav-glass');
    } else {
      navbar.classList.remove('nav-glass');
    }
  }, { passive: true });
  if (window.scrollY > 60) navbar.classList.add('nav-glass');

  // ─── Hero ────────────────────────────────────────────────────
  const heroBg = $('hero-bg');
  heroBg.style.backgroundImage = `url('${C.hero.backgroundImage}')`;

  $('hero-headline').textContent = C.hero.headline;
  $('hero-sub').textContent = C.hero.subheadline;

  const heroCtas = $('hero-ctas');
  const btnPrimary = el('a',
    'px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase rounded-sm transition-all duration-300',
    C.hero.ctaPrimary.text
  );
  btnPrimary.href = C.hero.ctaPrimary.href;
  btnPrimary.style.cssText = `background: ${t.gold}; color: white;`;

  const btnSecondary = el('a',
    'px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase border border-white/50 text-white hover:border-[var(--gold)] hover:text-[var(--gold)] rounded-sm transition-all duration-300',
    C.hero.ctaSecondary.text
  );
  btnSecondary.href = C.hero.ctaSecondary.href;

  heroCtas.append(btnPrimary, btnSecondary);

  // ─── Stats ───────────────────────────────────────────────────
  const statsBar = $('stats-bar');
  C.stats.forEach((s) => {
    const div = el('div', 'fade-up');
    div.innerHTML = `
      <p class="font-display text-4xl lg:text-5xl font-light text-gold-gradient">${s.value}</p>
      <p class="text-white/50 text-sm tracking-widest uppercase mt-1">${s.label}</p>`;
    statsBar.appendChild(div);
  });

  // ─── Rooms ───────────────────────────────────────────────────
  $('rooms-title').textContent = C.rooms.sectionTitle;
  $('rooms-sub').textContent = C.rooms.sectionSubtitle;

  const roomsGrid = $('rooms-grid');
  C.rooms.items.forEach((r, i) => {
    const card = el('div', 'room-card bg-white rounded-sm overflow-hidden shadow-md fade-up');
    card.style.transitionDelay = `${i * 0.08}s`;
    const amenityList = r.amenities.map(a =>
      `<li class="flex items-center gap-2 text-sm text-[var(--navy)]/65">
        <span style="color:${t.gold}">✓</span> ${a}
      </li>`
    ).join('');
    card.innerHTML = `
      <div class="overflow-hidden relative h-56">
        <img src="${r.image}" alt="${r.name}" class="card-img w-full h-full object-cover" loading="lazy" />
        ${r.badge ? `<span class="absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-sm" style="background:${t.gold};color:white">${r.badge}</span>` : ''}
      </div>
      <div class="p-6">
        <div class="flex items-start justify-between gap-2 mb-2">
          <h3 class="font-display text-xl font-semibold text-[var(--navy)]">${r.name}</h3>
          <span class="text-[var(--gold)] font-semibold text-sm whitespace-nowrap">${r.price}</span>
        </div>
        <p class="text-[var(--navy)]/50 text-xs tracking-widest uppercase mb-3">${r.period}</p>
        <p class="text-[var(--navy)]/65 text-sm leading-relaxed mb-4">${r.description}</p>
        <ul class="space-y-1.5 mb-5">${amenityList}</ul>
        <a href="#contact" class="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-[var(--gold)] hover:gap-3 transition-all duration-200">
          Pesan <span>→</span>
        </a>
      </div>`;
    roomsGrid.appendChild(card);
  });

  // ─── Facilities ──────────────────────────────────────────────
  $('facilities-title').textContent = C.facilities.sectionTitle;
  $('facilities-sub').textContent = C.facilities.sectionSubtitle;

  const facGrid = $('facilities-grid');
  C.facilities.items.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'fade-up';
    card.style.cssText = 'border-radius:2px;padding:2rem;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.05);display:flex;flex-direction:column;';
    card.style.transitionDelay = `${i * 0.1}s`;
    const iconWrap = document.createElement('div');
    iconWrap.style.cssText = 'margin-bottom:1.25rem;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;border-radius:2px;background:rgba(201,168,76,0.15);';
    iconWrap.innerHTML = `<i data-lucide="${f.icon}" style="color:var(--gold);width:24px;height:24px;"></i>`;
    card.appendChild(iconWrap);
    const title = document.createElement('h3');
    title.style.cssText = 'font-family:\'Cormorant Garamond\',serif;font-size:1.25rem;font-weight:600;color:white;margin-bottom:0.75rem;';
    title.textContent = f.title;
    card.appendChild(title);
    const desc = document.createElement('p');
    desc.style.cssText = 'color:rgba(255,255,255,0.6);font-size:0.875rem;line-height:1.625;flex:1;';
    desc.textContent = f.description;
    card.appendChild(desc);
    facGrid.appendChild(card);
  });

  // ─── About ───────────────────────────────────────────────────
  $('about-img').src = C.about.image;
  $('about-img').alt = C.brand.name;
  $('about-headline').textContent = C.about.headline;
  $('about-body').textContent = C.about.body;

  const highlights = $('about-highlights');
  C.about.highlights.forEach((h) => {
    const li = el('li', 'flex items-start gap-3 text-[var(--navy)]/70 text-sm');
    li.innerHTML = `<span class="mt-0.5 shrink-0" style="color:${t.gold}">✦</span> ${h}`;
    highlights.appendChild(li);
  });

  // ─── Testimonials ────────────────────────────────────────────
  $('testi-title').textContent = C.testimonials.sectionTitle;

  const testiGrid = $('testimonials-grid');
  C.testimonials.items.forEach((t2, i) => {
    const card = el('div', 'bg-white/5 border border-white/10 rounded-sm p-8 relative fade-up');
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="quote-mark absolute top-4 left-6 text-white/10">"</div>
      <div class="stars text-sm mb-4">${stars(t2.rating)}</div>
      <p class="text-white/70 text-sm leading-relaxed mb-6 relative z-10">"${t2.text}"</p>
      <div class="flex items-center gap-4">
        <img src="${t2.avatar}" alt="${t2.name}" class="w-12 h-12 rounded-full object-cover border-2" style="border-color:${t.gold}" loading="lazy" />
        <div>
          <p class="font-semibold text-white text-sm">${t2.name}</p>
          <p class="text-white/45 text-xs">${t2.location}</p>
        </div>
      </div>`;
    testiGrid.appendChild(card);
  });

  // ─── Contact ─────────────────────────────────────────────────
  $('contact-title').textContent = C.contact.sectionTitle;
  $('contact-sub').textContent = C.contact.sectionSubtitle;

  const emailEl = $('contact-email');
  emailEl.textContent = C.contact.email;
  emailEl.href = `mailto:${C.contact.email}`;

  const phoneEl = $('contact-phone');
  phoneEl.textContent = C.contact.phone;
  phoneEl.href = `tel:${C.contact.phone.replace(/\D/g, '')}`;

  $('contact-address').textContent = C.contact.address;

  const ff = C.contact.formFields;
  $('form-name').placeholder = ff.namePlaceholder;
  $('form-email').placeholder = ff.emailPlaceholder;
  $('form-dest').placeholder = ff.destinationPlaceholder;
  $('form-msg').placeholder = ff.messagePlaceholder;
  $('form-submit').textContent = ff.submitText;

  // ─── Footer ──────────────────────────────────────────────────
  $('footer-brand').textContent = C.brand.name;
  $('footer-tagline').textContent = C.footer.tagline;
  $('footer-copyright').textContent = C.footer.copyright;

  const socials = $('footer-socials');
  C.footer.socials.forEach((s) => {
    const a = el('a', 'w-9 h-9 flex items-center justify-center rounded-sm border border-white/15 hover:border-[var(--gold)] hover:text-[var(--gold)] text-white/50 transition-all duration-200');
    a.href = s.href;
    a.title = s.platform;
    a.innerHTML = `<i data-lucide="${s.icon}" style="width:16px;height:16px;"></i>`;
    socials.appendChild(a);
  });

  const footerCols = $('footer-columns');
  C.footer.columns.forEach((col) => {
    const div = el('div');
    div.innerHTML = `<h4 class="text-white font-semibold text-sm tracking-widest uppercase mb-4">${col.title}</h4>`;
    const ul = el('ul', 'space-y-2');
    col.links.forEach((link) => {
      const li = el('li');
      const a = el('a', 'text-white/45 hover:text-[var(--gold)] text-sm transition-colors duration-200');
      a.href = link.href;
      a.textContent = link.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    footerCols.appendChild(div);
  });

  // ─── Form Submit ─────────────────────────────────────────────
  window.handleFormSubmit = function (e) {
    e.preventDefault();
    const form = $('contact-form');
    const success = $('form-success');
    form.style.opacity = '0';
    setTimeout(() => {
      form.style.display = 'none';
      success.classList.remove('hidden');
    }, 400);
  };

  // ─── Scroll Animation ────────────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  document.querySelectorAll('#hero .fade-up').forEach((el) => {
    setTimeout(() => el.classList.add('visible'), 100);
  });

  // ─── Smooth Scroll ───────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  lucide.createIcons();
})();
