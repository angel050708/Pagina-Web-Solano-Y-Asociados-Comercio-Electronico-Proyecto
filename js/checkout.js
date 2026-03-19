(function () {
  let currentStep = 1;
  let selectedPayment = 'tarjeta';

  const paymentLabels = {
    tarjeta: 'Tarjeta de credito',
    transferencia: 'Transferencia bancaria',
    banco: 'Pago en banco'
  };

  document.addEventListener('DOMContentLoaded', () => {
    if (typeof getCart === 'function' && getCart().length === 0) {
      window.location.href = 'catalogo.html';
      return;
    }
    renderCheckoutSummary();
    formatCardInputs();
    var rtnInput = document.getElementById('rtn');
    if (rtnInput && typeof formatRTNInput === 'function') {
      formatRTNInput(rtnInput);
    }
  });

  function renderCheckoutSummary() {
    const cart = getCart();
    const container = document.getElementById('checkoutItems');
    if (!container) return;

    if (cart.length === 0) {
      window.location.href = 'catalogo.html';
      return;
    }

    container.innerHTML = cart.map(item => {
      const name = item.name || item.title || 'Servicio';
      const qty = item.quantity || 1;
      const price = (item.price || 0) * qty;
      return `
        <div class="checkout-summary-item">
          <span class="item-name">
            <span class="item-qty">${qty}x</span>
            ${name}
          </span>
          <span class="item-price">${formatCurrency(price)}</span>
        </div>`;
    }).join('');

    const subtotal = getCartTotal();
    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    const elSubtotal = document.getElementById('ckSubtotal');
    const elTax = document.getElementById('ckTax');
    const elTotal = document.getElementById('ckTotal');
    if (elSubtotal) elSubtotal.textContent = formatCurrency(subtotal);
    if (elTax) elTax.textContent = formatCurrency(tax);
    if (elTotal) elTotal.textContent = formatCurrency(total);
  }

  window.goToStep = function(step) {
    if (step > currentStep) {
      if (currentStep === 1 && !validateStep1()) return;
      if (currentStep === 2 && !validateStep2()) return;
    }

    currentStep = step;

    document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('step-' + step);
    if (target) target.classList.add('active');

    document.querySelectorAll('.stepper-step').forEach(s => {
      const sStep = parseInt(s.dataset.step);
      s.classList.remove('active', 'completed');
      if (sStep === step) s.classList.add('active');
      else if (sStep < step) s.classList.add('completed');
    });

    const line12 = document.getElementById('line-1-2');
    const line23 = document.getElementById('line-2-3');
    if (line12) line12.className = 'stepper-line' + (step > 1 ? ' completed' : '');
    if (line23) line23.className = 'stepper-line' + (step > 2 ? ' completed' : (step === 2 ? ' active' : ''));

    if (step === 3) populateConfirmation();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function validateStep1() {
    const fields = ['nombre', 'email', 'telefono', 'rtn', 'direccion'];
    let valid = true;

    fields.forEach(id => {
      const el = document.getElementById(id);
      const val = el ? el.value.trim() : '';

      if (!val) {
        if (el) el.classList.add('is-invalid');
        valid = false;
      } else if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        if (el) el.classList.add('is-invalid');
        valid = false;
      } else if (id === 'rtn' && typeof validateRTN === 'function' && !validateRTN(val)) {
        if (el) el.classList.add('is-invalid');
        valid = false;
      } else {
        if (el) { el.classList.remove('is-invalid'); el.classList.add('is-valid'); }
      }
    });

    if (!valid) showToast('Complete todos los campos requeridos', 'warning');
    return valid;
  }

  function validateStep2() {
    if (selectedPayment !== 'tarjeta') return true;

    const fields = ['cardNumber', 'cardExpiry', 'cardCVV', 'cardName'];
    let valid = true;

    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el || !el.value.trim()) {
        if (el) el.classList.add('is-invalid');
        valid = false;
      } else {
        if (el) { el.classList.remove('is-invalid'); el.classList.add('is-valid'); }
      }
    });

    if (!valid) showToast('Complete los datos de la tarjeta', 'warning');
    return valid;
  }

  window.selectPayment = function(method) {
    selectedPayment = method;

    document.querySelectorAll('.payment-method').forEach(el => {
      el.classList.toggle('selected', el.dataset.method === method);
    });

    const cardFields = document.getElementById('cardFields');
    const transferFields = document.getElementById('transferFields');
    const bankFields = document.getElementById('bankFields');
    if (cardFields) cardFields.classList.toggle('visible', method === 'tarjeta');
    if (transferFields) transferFields.classList.toggle('visible', method === 'transferencia');
    if (bankFields) bankFields.classList.toggle('visible', method === 'banco');
  };

  function formatCardInputs() {
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
      cardNumber.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = val;
      });
    }

    const cardExpiry = document.getElementById('cardExpiry');
    if (cardExpiry) {
      cardExpiry.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
        e.target.value = val;
      });
    }

    const cardCVV = document.getElementById('cardCVV');
    if (cardCVV) {
      cardCVV.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
      });
    }
  }

  function populateConfirmation() {
    const nombre = document.getElementById('nombre')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const telefono = document.getElementById('telefono')?.value || '';
    const rtn = document.getElementById('rtn')?.value || '';
    const direccion = document.getElementById('direccion')?.value || '';
    const empresa = document.getElementById('empresa')?.value || '';

    const confirmClient = document.getElementById('confirmClientData');
    if (confirmClient) {
      confirmClient.innerHTML = '<strong>' + nombre + '</strong><br>' + email + ' &middot; +504 ' + telefono + '<br>' + 'RTN: ' + rtn + '<br>' + direccion + (empresa ? '<br>Empresa: ' + empresa : '');
    }

    let paymentInfo = paymentLabels[selectedPayment];
    if (selectedPayment === 'tarjeta') {
      const num = document.getElementById('cardNumber')?.value || '';
      paymentInfo += ' (****' + num.replace(/\s/g, '').slice(-4) + ')';
    }
    const confirmPayment = document.getElementById('confirmPaymentData');
    if (confirmPayment) confirmPayment.innerHTML = paymentInfo;

    const cart = getCart();
    const subtotal = getCartTotal();
    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    const confirmItems = document.getElementById('confirmItemsList');
    if (confirmItems) {
      confirmItems.innerHTML = cart.map(item => {
        const name = item.name || item.title || 'Servicio';
        const qty = item.quantity || 1;
        const price = (item.price || 0) * qty;
        return '<div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.25rem 0;">' + '<span>' + name + ' x ' + qty + '</span>' + '<span style="font-family: var(--font-mono); font-weight: 500;">' + formatCurrency(price) + '</span>' + '</div>';
      }).join('') + '<hr style="margin: 0.5rem 0; opacity: 0.15; border-color: var(--teal-300);">' + '<div style="display: flex; justify-content: space-between; font-size: 0.85rem;">' + '<span>ISV (15%)</span><span style="font-family: var(--font-mono); font-weight: 500;">' + formatCurrency(tax) + '</span>' + '</div>' + '<div style="display: flex; justify-content: space-between; font-weight: 600; margin-top: 0.25rem;">' + '<span>Total</span><span style="color: var(--color-primary); font-family: var(--font-mono);">' + formatCurrency(total) + '</span>' + '</div>';
    }
  }

  window.submitOrder = function() {
    const termsChecked = document.getElementById('acceptTerms')?.checked;
    if (!termsChecked) {
      showToast('Debe aceptar los terminos y condiciones', 'warning');
      return;
    }

    const btn = document.getElementById('btnConfirm');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Procesando...';
    }

    setTimeout(() => {
      const orderNum = 'SA-' + Date.now().toString(36).toUpperCase();
      const cart = getCart();
      const subtotal = getCartTotal();
      const tax = subtotal * 0.15;
      const total = subtotal + tax;

      var order = {
        id: orderNum,
        orderNumber: orderNum,
        items: cart.map(function(item) {
          return {
            id: item.id,
            name: item.name || item.title || 'Servicio',
            price: item.price || 0,
            quantity: item.quantity || 1
          };
        }),
        subtotal: subtotal,
        tax: tax,
        total: total,
        date: new Date().toISOString(),
        status: 'activo'
      };

      if (typeof saveOrder === 'function') saveOrder(order);

      const orderEl = document.getElementById('orderNumber');
      if (orderEl) orderEl.textContent = orderNum;

      saveCart([]);

      const modal = new bootstrap.Modal(document.getElementById('successModal'));
      modal.show();

      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Confirmar pedido';
      }
    }, 1800);
  };
})();
