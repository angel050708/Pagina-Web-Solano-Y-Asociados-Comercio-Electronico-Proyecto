/* === Carrito de compras === */
(function () {
  const serviceIcons = {
    default: 'bi-briefcase',
    contabilidad: 'bi-calculator',
    impuestos: 'bi-file-earmark-text',
    finanzas: 'bi-graph-up-arrow',
    legal: 'bi-building',
    auditoria: 'bi-clipboard-check',
    empresa: 'bi-shop',
    declaracion: 'bi-file-earmark-bar-graph'
  };

  let discountPercent = 0;

  document.addEventListener('DOMContentLoaded', () => {
    renderCart();
  });

  /* --- Ícono del servicio --- */
  function getIconForItem(item) {
    const name = (item.name || item.title || '').toLowerCase();
    for (const [key, icon] of Object.entries(serviceIcons)) {
      if (name.includes(key)) return icon;
    }
    return item.icon || serviceIcons.default;
  }

  /* --- Renderizado del carrito --- */
  function renderCart() {
    const cart = getCart();
    const cartContent = document.getElementById('cartContent');
    const emptyCart = document.getElementById('emptyCart');
    const container = document.getElementById('cartItemsContainer');

    if (!container) return;

    if (cart.length === 0) {
      if (cartContent) cartContent.style.display = 'none';
      if (emptyCart) emptyCart.style.display = 'block';
      return;
    }

    if (cartContent) cartContent.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';

    container.innerHTML = cart.map(item => {
      const price = item.price || 0;
      const qty = item.quantity || 1;
      const subtotal = price * qty;
      const icon = getIconForItem(item);
      const name = item.name || item.title || 'Servicio';
      const desc = item.description || item.desc || '';

      return `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-info">
            <div class="cart-item-icon">
              <i class="bi ${icon}"></i>
            </div>
            <div>
              <div class="cart-item-name">${name}</div>
              <div class="cart-item-desc">${desc}</div>
            </div>
          </div>
          <div class="cart-item-price d-none d-md-block">${formatCurrency(price)}</div>
          <div>
            <div class="qty-control">
              <button onclick="changeQty('${item.id}', -1)" aria-label="Reducir cantidad"><i class="bi bi-dash"></i></button>
              <span>${qty}</span>
              <button onclick="changeQty('${item.id}', 1)" aria-label="Aumentar cantidad"><i class="bi bi-plus"></i></button>
            </div>
          </div>
          <div class="cart-item-subtotal d-none d-md-block">${formatCurrency(subtotal)}</div>
          <button class="btn-remove" onclick="removeItem('${item.id}')" title="Eliminar" aria-label="Eliminar servicio">
            <i class="bi bi-x-lg"></i>
          </button>
          <div class="cart-item-mobile-row d-md-none">
            <span style="font-size: 0.8rem; color: var(--teal-600);">${formatCurrency(price)} c/u</span>
            <span class="cart-item-subtotal">${formatCurrency(subtotal)}</span>
          </div>
        </div>`;
    }).join('');

    updateSummary();
  }

  /* --- Resumen de totales --- */
  function updateSummary() {
    const cart = getCart();
    const count = cart.reduce((s, i) => s + (i.quantity || 1), 0);
    const subtotal = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);
    const discount = subtotal * (discountPercent / 100);
    const afterDiscount = subtotal - discount;
    const tax = afterDiscount * 0.15;
    const total = afterDiscount + tax;

    const summaryCount = document.getElementById('summaryCount');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryDiscount = document.getElementById('summaryDiscount');
    const summaryTax = document.getElementById('summaryTax');
    const summaryTotal = document.getElementById('summaryTotal');

    if (summaryCount) summaryCount.textContent = count;
    if (summarySubtotal) summarySubtotal.textContent = formatCurrency(subtotal);
    if (summaryDiscount) summaryDiscount.textContent = '- ' + formatCurrency(discount);
    if (summaryTax) summaryTax.textContent = formatCurrency(tax);
    if (summaryTotal) summaryTotal.textContent = formatCurrency(total);
  }

  /* --- Cambiar cantidad --- */
  window.changeQty = function(itemId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    saveCart(cart);
    renderCart();
  };

  /* --- Eliminar servicio --- */
  window.removeItem = function(itemId) {
    removeFromCart(itemId);
    renderCart();
    showToast('Servicio eliminado del carrito', 'info');
  };

  /* --- Vaciar carrito --- */
  window.clearCart = function() {
    if (!confirm('¿Está seguro que desea vaciar el carrito?')) return;
    saveCart([]);
    renderCart();
    showToast('Carrito vaciado', 'info');
  };

  /* --- Aplicar descuento --- */
  window.applyDiscount = function() {
    const el = document.getElementById('discountCode');
    const code = el ? el.value.trim().toUpperCase() : '';
    const validCodes = {
      'SOLANO10': 10,
      'SOLANO20': 20,
      'BIENVENIDO': 15
    };

    if (validCodes[code]) {
      discountPercent = validCodes[code];
      updateSummary();
      showToast('Codigo aplicado! ' + discountPercent + '% de descuento', 'success');
    } else if (code === '') {
      showToast('Ingrese un codigo de descuento', 'warning');
    } else {
      discountPercent = 0;
      updateSummary();
      showToast('Codigo de descuento no valido', 'error');
    }
  };
})();
