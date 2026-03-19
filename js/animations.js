

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCounters();
  initParallax();
  initTypingEffect();
});

/* --- Scroll Reveal with Intersection Observer --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* --- Animated Counters --- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-counter'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    el.textContent = prefix + current.toLocaleString('es-HN') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = prefix + target.toLocaleString('es-HN') + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* --- Parallax Effect --- */
function initParallax() {
  const layers = document.querySelectorAll('.parallax-layer');
  if (!layers.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    layers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0.5;
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

/* --- Typing Effect --- */
function initTypingEffect() {
  const elements = document.querySelectorAll('[data-typing]');
  elements.forEach(el => {
    const texts = el.getAttribute('data-typing').split('|');
    const speed = parseInt(el.getAttribute('data-typing-speed')) || 80;
    const pause = parseInt(el.getAttribute('data-typing-pause')) || 2000;
    typeWriter(el, texts, speed, pause);
  });
}

function typeWriter(el, texts, speed, pause) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex === currentText.length) {
      delay = pause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = speed;
    }

    setTimeout(tick, delay);
  }

  tick();
}
