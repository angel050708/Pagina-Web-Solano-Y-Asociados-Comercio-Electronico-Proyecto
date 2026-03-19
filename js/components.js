document.addEventListener('DOMContentLoaded', () => {
  initCartBadge();
  initTooltips();
  initToasts();
  initNewsletterForms();
  initCookieBanner();
});

function initCartBadge() {
  updateCartBadge();
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('sa_cart') || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('sa_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart(cart);
  showToast('Servicio agregado al carrito', 'success');
}

function removeFromCart(itemId) {
  const cart = getCart().filter(i => i.id !== itemId);
  saveCart(cart);
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + (i.price || 0) * (i.quantity || 1), 0);
}

function initTooltips() {
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach(el => new bootstrap.Tooltip(el));
}

function initToasts() {
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = '1100';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: 'bi-check-circle-fill',
    error: 'bi-exclamation-circle-fill',
    warning: 'bi-exclamation-triangle-fill',
    info: 'bi-info-circle-fill'
  };

  const colors = {
    success: '#16a34a',
    error: '#dc2626',
    warning: '#f59e0b',
    info: '#2563eb'
  };

  const toastEl = document.createElement('div');
  toastEl.className = 'toast align-items-center border-0';
  toastEl.setAttribute('role', 'alert');
  toastEl.style.borderLeft = '4px solid ' + colors[type] + ' !important';
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center gap-2">
        <i class="bi ${icons[type]}" style="color: ${colors[type]}; font-size: 1.1rem;"></i>
        <span></span>
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>`;
  toastEl.querySelector('span').textContent = message;

  container.appendChild(toastEl);
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
  toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let isValid = true;
  form.querySelectorAll('[required]').forEach(input => {
    const group = input.closest('.form-group') || input.parentElement;
    const feedback = group?.querySelector('.invalid-feedback');

    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      isValid = false;
    } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      input.classList.add('is-invalid');
      if (feedback) feedback.textContent = 'Ingrese un correo electrónico válido';
      isValid = false;
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }
  });

  return isValid;
}

function initNewsletterForms() {
  const forms = document.querySelectorAll('.footer-newsletter, .newsletter-form');
  if (!forms || forms.length === 0) return;

  forms.forEach(form => {
    if (form.__newsletterBound) return;
    form.__newsletterBound = true;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (!emailVal) {
        showToast('Ingrese un correo electrónico válido', 'warning');
        return;
      }
      showToast('Gracias por suscribirse', 'success');
      form.reset();
    });
  });
}

function formatCurrency(amount) {
  return 'L ' + amount.toLocaleString('es-HN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function initCookieBanner() {
  if (localStorage.getItem('sa_cookie_consent') !== null) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookieBanner';
  banner.innerHTML = `
    <div class="container">
      <div class="cookie-banner-inner">
        <div class="cookie-banner-text">
          <i class="bi bi-shield-lock me-1"></i>
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido.
          Al continuar navegando, acepta nuestro uso de cookies conforme a nuestra <a href="cookies.html">Política de Cookies</a>.
        </div>
        <div class="cookie-banner-actions">
          <button class="cookie-btn-accept" id="cookieAccept">Aceptar</button>
          <button class="cookie-btn-decline" id="cookieDecline">Rechazar</button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(banner);

  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('sa_cookie_consent', 'accepted');
    banner.classList.add('hidden');
  });

  document.getElementById('cookieDecline').addEventListener('click', () => {
    localStorage.setItem('sa_cookie_consent', 'declined');
    banner.classList.add('hidden');
  });
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem('sa_orders') || '[]');
  } catch (e) {
    return [];
  }
}

function saveOrder(order) {
  var orders = getOrders();
  orders.push(order);
  localStorage.setItem('sa_orders', JSON.stringify(orders));
}

function formatRTNInput(input) {
  input.setAttribute('maxlength', '16');
  input.addEventListener('input', function (e) {
    var val = e.target.value.replace(/\D/g, '');
    if (val.length > 14) val = val.substring(0, 14);
    if (val.length > 8) {
      val = val.substring(0, 4) + '-' + val.substring(4, 8) + '-' + val.substring(8);
    } else if (val.length > 4) {
      val = val.substring(0, 4) + '-' + val.substring(4);
    }
    e.target.value = val;
  });
}

function validateRTN(value) {
  return /^\d{4}-\d{4}-\d{6}$/.test(value);
}
