/* ============================================================
   IFMG Instalações 2026 — main.js
   ============================================================ */

// ── 1. HEADER SCROLL ───────────────────────────────────────
const header = document.getElementById('site-header');
function updateHeader() {
  if (window.scrollY > 24) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// ── 2. GRAFISMO INDÍGENA BRASILEIRO (fundo flutuante) ──────
(function initIndigenaBackground() {
  const container = document.getElementById('indigena-bg');
  if (!container) return;

  // SVG motifs inspired by Brazilian indigenous graphic art
  // (Kayapó, Tupinambá, Wajãpi body painting patterns)
  const motifs = [
    // Diamond / losango - Kayapó pattern
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,4 56,30 30,56 4,30" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="30,14 46,30 30,46 14,30" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="30" y1="4" x2="30" y2="56" stroke="currentColor" stroke-width="1"/>
      <line x1="4" y1="30" x2="56" y2="30" stroke="currentColor" stroke-width="1"/>
    </svg>`,
    // Espiral / meandro - Wajãpi
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,30 m0,-20 a20,20 0 1,1 0,40 a15,15 0 1,0 0,-30 a10,10 0 1,1 0,20 a5,5 0 1,0 0,-10" fill="none" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    // Cruz / cruzado - Tupinambá
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="8" width="12" height="44" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="8" y="24" width="44" height="12" fill="none" stroke="currentColor" stroke-width="2"/>
      <rect x="26" y="26" width="8" height="8" fill="currentColor" opacity="0.4"/>
    </svg>`,
    // Chevron / seta - padrão corporal
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,50 30,12 50,50" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <polyline points="10,40 30,22 50,40" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polyline points="10,30 30,32 50,30" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    </svg>`,
    // Círculo com pontos - grafismo Bororo
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="30" cy="8" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="30" cy="52" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="8" cy="30" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="52" cy="30" r="3" fill="currentColor" opacity="0.6"/>
    </svg>`,
    // Triângulos encaixados - Xavante
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,6 54,50 6,50" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <polygon points="30,18 46,46 14,46" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polygon points="30,30 38,44 22,44" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>`,
    // Labirinto quadrado - grafismo amazônico
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M8,8 h44 v44 h-44 v-33 h33 v22 h-22 v-11 h11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
    </svg>`,
    // Pena / pluma estilizada
    `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,55 Q10,35 18,12 Q30,4 42,12 Q50,35 30,55Z" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="30" y1="55" x2="30" y2="10" stroke="currentColor" stroke-width="1.5"/>
      <line x1="30" y1="25" x2="20" y2="18" stroke="currentColor" stroke-width="1"/>
      <line x1="30" y1="30" x2="18" y2="26" stroke="currentColor" stroke-width="1"/>
      <line x1="30" y1="35" x2="19" y2="34" stroke="currentColor" stroke-width="1"/>
      <line x1="30" y1="25" x2="40" y2="18" stroke="currentColor" stroke-width="1"/>
      <line x1="30" y1="30" x2="42" y2="26" stroke="currentColor" stroke-width="1"/>
      <line x1="30" y1="35" x2="41" y2="34" stroke="currentColor" stroke-width="1"/>
    </svg>`,
  ];

  const count = 28;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'indigena-motif';

    const motif = motifs[i % motifs.length];
    el.innerHTML = motif;

    // Random positioning
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = 40 + Math.random() * 70; // 40px–110px
    const delay = Math.random() * 12;
    const duration = 14 + Math.random() * 18;
    const rotate = Math.random() * 360;

    el.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: -${delay}s;
      animation-duration: ${duration}s;
      transform: rotate(${rotate}deg);
    `;

    container.appendChild(el);
  }
})();

// ── 3. HERO SLIDESHOW ──────────────────────────────────────
(function initHeroSlideshow() {
  // Build the list of hero slides: one per artwork, using first image + title
  const slides = artworks
    .filter(a => a.images.length > 0)
    .map(a => ({ src: a.images[0].src, alt: a.images[0].alt, title: a.title, turma: a.turma }));

  if (slides.length === 0) return;

  const container = document.getElementById('hero-slideshow');
  const label     = document.getElementById('hero-slide-label');
  if (!container || !label) return;

  // Create img elements for all slides
  slides.forEach((slide, i) => {
    const img = document.createElement('img');
    img.src   = slide.src;
    img.alt   = slide.alt;
    img.className = 'hero-slide-img' + (i === 0 ? ' active' : '');
    img.crossOrigin = 'anonymous';
    img.loading = i === 0 ? 'eager' : 'lazy';
    container.appendChild(img);
  });

  // Set initial label
  function setLabel(idx) {
    label.innerHTML = `<span class="hero-slide-title">${slides[idx].title}</span><span class="hero-slide-turma">${slides[idx].turma}</span>`;
    label.classList.remove('fade-label');
    // Force reflow then re-add
    void label.offsetWidth;
    label.classList.add('fade-label');
  }
  setLabel(0);

  const imgs = container.querySelectorAll('.hero-slide-img');
  let current = 0;

  setInterval(() => {
    imgs[current].classList.remove('active');
    current = (current + 1) % slides.length;
    imgs[current].classList.add('active');
    setLabel(current);
  }, 4000);
})();

// ── 4. RENDER ARTWORKS ─────────────────────────────────────
function renderArtworks() {
  const container = document.getElementById('artworks-container');

  artworks.forEach((artwork, index) => {
    const reversed = index % 2 === 1;
    const hasImages = artwork.images.length > 0;
    const main = artwork.images[0];
    const thumbs = artwork.images.slice(1);
    const num = String(index + 1).padStart(2, '0');

    // Image column
    let imageColHTML = '';
    if (hasImages) {
      let thumbsHTML = '';
      if (thumbs.length > 0) {
        const thumbItems = thumbs.map((img, i) => `
          <button
            class="artwork-thumb-btn"
            aria-label="Ampliar imagem ${i + 2} de ${artwork.title}"
            data-artwork-id="${artwork.id}"
            data-img-index="${i + 1}"
          >
            <img src="${img.src}" alt="${img.alt}" class="artwork-thumb-img" loading="lazy" crossorigin="anonymous" />
          </button>
        `).join('');
        thumbsHTML = `<div class="artwork-thumbs">${thumbItems}</div>`;
      }
      imageColHTML = `
        <button
          class="artwork-main-btn"
          aria-label="Ampliar imagem principal de ${artwork.title}"
          data-artwork-id="${artwork.id}"
          data-img-index="0"
        >
          <img src="${main.src}" alt="${main.alt}" class="artwork-main-img" crossorigin="anonymous" />
          <span class="artwork-main-overlay" aria-hidden="true"></span>
        </button>
        ${thumbsHTML}
      `;
    } else {
      imageColHTML = `
        <div class="artwork-placeholder">
          <span class="artwork-placeholder-label">Imagem em breve</span>
          <span class="artwork-placeholder-sub">Espaço reservado para a fotografia da instalação.</span>
        </div>
      `;
    }

    const imageOrderClass = reversed ? 'order-2' : '';
    const textOrderClass  = reversed ? 'order-1' : '';

    // Description paragraphs
    const descHTML = artwork.description.map(p => `<p>${p}</p>`).join('');
    const videoHTML = artwork.video ? `
          <div class="artwork-video">
            <a href="${artwork.video}" target="_blank" rel="noopener noreferrer" class="artwork-video-link">
              Ver vídeo da instalação
            </a>
          </div>
    ` : '';

    const article = document.createElement('article');
    article.id = artwork.id;
    article.className = 'artwork-section';
    article.innerHTML = `
      <div class="artwork-grid">
        <div class="reveal artwork-images ${imageOrderClass}">
          ${imageColHTML}
        </div>
        <div class="reveal artwork-text ${textOrderClass}" data-delay="120">
          <p class="artwork-number">${num} — ${artwork.inspiration}</p>
          <h3 class="artwork-title">${artwork.title}</h3>
          <div class="artwork-description">${descHTML}</div>
          ${videoHTML}
          <dl class="artwork-meta">
            <div class="meta-item">
              <dt>Turma</dt>
              <dd>${artwork.turma}</dd>
            </div>
            <div class="meta-item">
              <dt>Ano</dt>
              <dd>${artwork.year}</dd>
            </div>
            <div class="meta-item">
              <dt>Categoria</dt>
              <dd>${artwork.inspiration}</dd>
            </div>
            <div class="meta-item full">
              <dt>Integrantes</dt>
              <dd>${artwork.authors}</dd>
            </div>
          </dl>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}

// ── 5. RENDER GALLERY ──────────────────────────────────────
function renderGallery() {
  const allImages = artworks.flatMap(a => a.images);
  const grid = document.getElementById('gallery-grid');

  if (allImages.length === 0) {
    document.getElementById('galeria').style.display = 'none';
    return;
  }

  allImages.forEach((img, i) => {
    const delay = (i % 3) * 80;
    const figure = document.createElement('figure');
    figure.className = 'gallery-item reveal';
    figure.style.transitionDelay = delay + 'ms';

    figure.innerHTML = `
      <button
        class="gallery-btn"
        aria-label="Ampliar: ${img.alt}"
        data-gallery-index="${i}"
      >
        <img src="${img.src}" alt="${img.alt}" class="gallery-img" loading="lazy" crossorigin="anonymous" />
        <span class="gallery-overlay" aria-hidden="true"></span>
      </button>
    `;

    grid.appendChild(figure);
  });

  // Gallery click handler
  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-gallery-index]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.galleryIndex, 10);
    lightboxOpen(artworks.flatMap(a => a.images), idx);
  });
}

// ── 6. LIGHTBOX ────────────────────────────────────────────
let lbImages = [];
let lbIndex  = 0;

const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
const lbCounter = document.getElementById('lb-counter');
const lbClose   = document.getElementById('lb-close');
const lbPrev    = document.getElementById('lb-prev');
const lbNext    = document.getElementById('lb-next');

function lightboxOpen(images, index) {
  lbImages = images;
  lbIndex  = index;
  lightboxUpdate();
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function lightboxClose() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  lbImages = [];
}

function lightboxUpdate() {
  const img = lbImages[lbIndex];
  lbImg.src     = img.src;
  lbImg.alt     = img.alt;
  lbCaption.textContent = img.alt;
  lbCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`;

  // Show/hide nav
  const single = lbImages.length <= 1;
  lbPrev.classList.toggle('hidden', single);
  lbNext.classList.toggle('hidden', single);
}

function lightboxNext() {
  lbIndex = (lbIndex + 1) % lbImages.length;
  lightboxUpdate();
}

function lightboxPrev() {
  lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
  lightboxUpdate();
}

lbClose.addEventListener('click', lightboxClose);
lbNext.addEventListener('click', lightboxNext);
lbPrev.addEventListener('click', lightboxPrev);

// Close on backdrop click
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightboxClose();
});

// Keyboard nav
document.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape')      lightboxClose();
  if (e.key === 'ArrowRight')  lightboxNext();
  if (e.key === 'ArrowLeft')   lightboxPrev();
});

// Delegated click for artwork image buttons
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-artwork-id][data-img-index]');
  if (!btn) return;
  const artworkId = btn.dataset.artworkId;
  const imgIndex  = parseInt(btn.dataset.imgIndex, 10);
  const artwork   = artworks.find(a => a.id === artworkId);
  if (artwork) lightboxOpen(artwork.images, imgIndex);
});

// ── 7. REVEAL ON SCROLL ────────────────────────────────────
function setupReveal() {
  const els = document.querySelectorAll('.reveal');

  // Apply transition-delay from data-delay attr
  els.forEach(el => {
    const delay = el.dataset.delay;
    if (delay) el.style.transitionDelay = delay + 'ms';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  els.forEach(el => observer.observe(el));
}

// ── INIT ───────────────────────────────────────────────────
renderArtworks();
renderGallery();
setupReveal();
