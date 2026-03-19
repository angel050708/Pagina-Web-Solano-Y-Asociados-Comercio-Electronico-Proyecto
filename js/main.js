/* === JavaScript Principal === */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initScrollTop();
  initCurrentYear();
});

/* --- Precargador / Splash --- */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;

  const hasSplash = preloader.querySelector('.splash-content');

  if (hasSplash) {
    /* Splash animado en home: mostrar 2s y luego desvanecer */
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 600);
      }, 2000);
    });
  } else {
    /* Precargador normal en otras páginas */
    window.addEventListener('load', () => {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 500);
    });
  }
}

/* --- Efecto de scroll en navbar --- */
function initNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  const isTransparent = navbar.classList.contains('navbar-transparent');

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      if (isTransparent) {
        navbar.classList.remove('navbar-transparent');
      }
    } else {
      navbar.classList.remove('scrolled');
      if (isTransparent) {
        navbar.classList.add('navbar-transparent');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Cerrar menú móvil al hacer clic
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.querySelector('.navbar-collapse');
      if (collapse && collapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  setActiveNavLink();
}

/* --- Enlace activo de navegación --- */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- Botón volver arriba --- */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Año actual en pie de página --- */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* --- Desplazamiento suave para enlaces ancla --- */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
});
