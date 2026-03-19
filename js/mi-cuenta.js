(function () {
  window.switchAuthTab = function (tab) {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var tabLogin = document.getElementById('tabLogin');
    var tabRegister = document.getElementById('tabRegister');

    if (tab === 'login') {
      if (loginForm) loginForm.style.display = 'block';
      if (registerForm) registerForm.style.display = 'none';
      if (tabLogin) tabLogin.classList.add('active');
      if (tabRegister) tabRegister.classList.remove('active');
    } else {
      if (loginForm) loginForm.style.display = 'none';
      if (registerForm) registerForm.style.display = 'block';
      if (tabLogin) tabLogin.classList.remove('active');
      if (tabRegister) tabRegister.classList.add('active');
    }
  };

  window.switchDashTab = function (tab) {
    var panels = {
      resumen: document.getElementById('panelResumen'),
      servicios: document.getElementById('panelServicios'),
      vencimientos: document.getElementById('panelVencimientos')
    };

    document.querySelectorAll('.dash-tab').forEach(function (t) {
      t.classList.remove('active');
    });
    document.querySelectorAll('.dash-tab-panel').forEach(function (p) {
      p.classList.remove('active');
    });

    if (panels[tab]) panels[tab].classList.add('active');

    var tabIndex = { resumen: 0, servicios: 1, vencimientos: 2 };
    var tabs = document.querySelectorAll('.dash-tab');
    if (tabs[tabIndex[tab]]) tabs[tabIndex[tab]].classList.add('active');

    document.querySelectorAll('.sidebar-nav a').forEach(function (a) {
      a.classList.remove('active');
    });
    var sidebarIndex = { resumen: 0, servicios: 1, vencimientos: 2 };
    var sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    if (sidebarLinks[sidebarIndex[tab]]) sidebarLinks[sidebarIndex[tab]].classList.add('active');
  };

  window.handleLogin = function (e) {
    e.preventDefault();
    if (typeof validateForm === 'function' && validateForm('formLogin')) {
      if (typeof showToast === 'function') showToast('Iniciando sesion...', 'info');
      setTimeout(function () {
        showDashboard();
        if (typeof showToast === 'function') showToast('Bienvenido de vuelta', 'success');
      }, 800);
    } else {
      showDashboard();
    }
  };

  window.handleRegister = function (e) {
    e.preventDefault();
    var pass = document.getElementById('regPassword').value;
    var confirmVal = document.getElementById('regPasswordConfirm').value;

    if (pass !== confirmVal) {
      var confirmInput = document.getElementById('regPasswordConfirm');
      if (confirmInput) confirmInput.classList.add('is-invalid');
      var group = confirmInput ? confirmInput.closest('.form-group') : null;
      var feedback = group ? group.querySelector('.invalid-feedback') : null;
      if (feedback) feedback.textContent = 'Las contrasenas no coinciden';
      return;
    }

    var rtnInput = document.getElementById('regRTN');
    if (rtnInput && rtnInput.value.trim()) {
      if (typeof validateRTN === 'function' && !validateRTN(rtnInput.value.trim())) {
        rtnInput.classList.add('is-invalid');
        if (typeof showToast === 'function') showToast('El RTN debe tener formato 0000-0000-000000', 'warning');
        return;
      }
    }

    if (typeof validateForm === 'function' && validateForm('formRegister')) {
      if (typeof showToast === 'function') showToast('Creando su cuenta...', 'info');
      setTimeout(function () {
        showDashboard();
        if (typeof showToast === 'function') showToast('Cuenta creada exitosamente', 'success');
      }, 1000);
    } else {
      showDashboard();
    }
  };

  window.showDashboard = function () {
    var auth = document.getElementById('authSection');
    var dash = document.getElementById('dashboardSection');
    if (auth) auth.style.display = 'none';
    if (dash) dash.style.display = 'block';
    loadDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.showAuthSection = function () {
    var dash = document.getElementById('dashboardSection');
    var auth = document.getElementById('authSection');
    if (dash) dash.style.display = 'none';
    if (auth) auth.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof showToast === 'function') showToast('Sesion cerrada correctamente', 'info');
  };

  var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  var mesesFull = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  function getNextVencimiento() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    if (day >= 10) {
      month = month + 1;
      if (month > 11) {
        month = 0;
        year = year + 1;
      }
    }
    return new Date(year, month, 10);
  }

  function getDaysUntil(date) {
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    var target = new Date(date.getTime());
    target.setHours(0, 0, 0, 0);
    return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  }

  function getBadgeClass(days) {
    if (days <= 7) return 'urgente';
    if (days <= 15) return 'proximo';
    return 'normal';
  }

  var serviceIcons = {
    'dec-mensual': 'bi-calendar2-check',
    'isr-anual': 'bi-calculator',
    'constitucion': 'bi-building',
    'auditoria': 'bi-search',
    'asesoria-fin': 'bi-graph-up-arrow',
    'gestion-sar': 'bi-file-earmark-ruled',
    'nominas': 'bi-people',
    'consultoria-trib': 'bi-journal-bookmark',
    'contabilidad-gral': 'bi-book',
    'auditoria-fiscal': 'bi-clipboard2-check'
  };

  var serviceDetails = {
    'dec-mensual': {
      tipo: 'Recurrente mensual',
      formulario: 'DEI-345',
      descripcion: 'Declaracion mensual de impuestos ante la SAR',
      obligacion: 'Declaracion ISV Mensual'
    },
    'isr-anual': {
      tipo: 'Anual',
      formulario: 'IR-1',
      descripcion: 'Declaracion anual del Impuesto Sobre la Renta',
      obligacion: 'Declaracion Anual ISR'
    },
    'constitucion': {
      tipo: 'Unico',
      formulario: 'Escritura Publica',
      descripcion: 'Constitucion legal de sociedad mercantil',
      obligacion: null
    },
    'auditoria': {
      tipo: 'Periodico',
      formulario: 'Dictamen Fiscal',
      descripcion: 'Auditoria contable y financiera completa',
      obligacion: 'Entrega Dictamen Fiscal'
    },
    'asesoria-fin': {
      tipo: 'Recurrente mensual',
      formulario: 'N/A',
      descripcion: 'Asesoria financiera y planificacion estrategica',
      obligacion: null
    },
    'gestion-sar': {
      tipo: 'Por tramite',
      formulario: 'Varios SAR',
      descripcion: 'Gestion de tramites ante el SAR de Honduras',
      obligacion: 'Tramite SAR'
    },
    'nominas': {
      tipo: 'Recurrente mensual',
      formulario: 'Planilla IHSS/RAP',
      descripcion: 'Administracion de planillas y deducciones legales',
      obligacion: 'Planilla IHSS/RAP'
    },
    'consultoria-trib': {
      tipo: 'Por consulta',
      formulario: 'N/A',
      descripcion: 'Consultoria especializada en legislacion tributaria',
      obligacion: null
    },
    'contabilidad-gral': {
      tipo: 'Recurrente mensual',
      formulario: 'Libros contables',
      descripcion: 'Servicio integral de contabilidad general',
      obligacion: 'Cierre contable mensual'
    },
    'auditoria-fiscal': {
      tipo: 'Periodico',
      formulario: 'Informe preventivo',
      descripcion: 'Auditoria fiscal preventiva para cumplimiento SAR',
      obligacion: 'Revision fiscal preventiva'
    }
  };

  function fc(amount) {
    if (typeof formatCurrency === 'function') return formatCurrency(amount);
    return 'L ' + amount.toFixed(2);
  }

  function getAllServices() {
    var orders = typeof getOrders === 'function' ? getOrders() : [];
    var allServices = [];
    orders.forEach(function (order) {
      if (order.items && order.items.length > 0) {
        order.items.forEach(function (item) {
          allServices.push({
            id: item.id,
            name: item.name || item.title || 'Servicio',
            price: (item.price || 0) * (item.quantity || 1),
            quantity: item.quantity || 1,
            date: order.date,
            orderNumber: order.orderNumber,
            status: order.status || 'activo'
          });
        });
      }
    });
    return allServices;
  }

  function getTotalBalance() {
    var orders = typeof getOrders === 'function' ? getOrders() : [];
    var total = 0;
    orders.forEach(function (order) {
      total += order.total || 0;
    });
    return total;
  }

  function loadDashboard() {
    var allServices = getAllServices();
    var totalBalance = getTotalBalance();
    var totalServicios = allServices.length;

    updateStatCards(totalServicios, totalBalance);
    updateResumenFiscal(totalBalance, allServices);
    renderServicios(allServices);
    renderVencimientos(allServices);
  }

  function updateStatCards(totalServicios, totalBalance) {
    var estadoEl = document.getElementById('statEstado');
    if (estadoEl) {
      if (totalBalance > 0) {
        estadoEl.innerHTML = 'Pendiente <span class="badge-status pendiente"><i class="bi bi-exclamation-circle"></i></span>';
      } else {
        estadoEl.innerHTML = 'Al dia <span class="badge-status al-dia"><i class="bi bi-check2"></i></span>';
      }
    }

    var vencEl = document.getElementById('statVencimiento');
    if (vencEl) {
      var nextVenc = getNextVencimiento();
      vencEl.innerHTML = '<span class="mono">10 ' + meses[nextVenc.getMonth()] + '</span>';
    }

    var servEl = document.getElementById('statServicios');
    if (servEl) {
      servEl.innerHTML = '<span class="mono">' + totalServicios + '</span>';
    }

    var balEl = document.getElementById('statBalance');
    if (balEl) {
      balEl.innerHTML = '<span class="mono">' + fc(totalBalance) + '</span>';
    }
  }

  function updateResumenFiscal(totalBalance, allServices) {
    var container = document.getElementById('resumenFiscalBody');
    if (!container) return;

    var isv = totalBalance * 0.15;
    var isr = totalBalance * 0.075;
    var ihss = 0;
    var hasNominas = allServices.some(function (s) { return s.id === 'nominas'; });
    if (hasNominas) ihss = 4200;
    var municipal = totalBalance > 0 ? totalBalance * 0.005 : 0;
    var totalObligaciones = isv + isr + ihss + municipal;

    container.innerHTML =
      '<div class="fiscal-summary-row">' +
        '<span class="label">Ingresos por servicios</span>' +
        '<span class="value">' + fc(totalBalance) + '</span>' +
      '</div>' +
      '<div class="fiscal-summary-row">' +
        '<span class="label">ISV pagado (15%)</span>' +
        '<span class="value">' + fc(isv) + '</span>' +
      '</div>' +
      '<div class="fiscal-summary-row">' +
        '<span class="label">Retenciones ISR</span>' +
        '<span class="value">' + fc(isr) + '</span>' +
      '</div>' +
      '<div class="fiscal-summary-row">' +
        '<span class="label">Aportaciones IHSS</span>' +
        '<span class="value">' + fc(ihss) + '</span>' +
      '</div>' +
      '<div class="fiscal-summary-row">' +
        '<span class="label">Contribuciones municipales</span>' +
        '<span class="value">' + fc(municipal) + '</span>' +
      '</div>' +
      '<div class="cuenta-ledger mt-3"></div>' +
      '<div class="fiscal-summary-row mt-2">' +
        '<span class="label"><strong>Total obligaciones</strong></span>' +
        '<span class="value"><strong>' + fc(totalObligaciones) + '</strong></span>' +
      '</div>';
  }

  function renderServicios(allServices) {
    var container = document.getElementById('panelServiciosBody');
    if (!container) return;

    if (allServices.length === 0) {
      container.innerHTML =
        '<div class="empty-state">' +
          '<i class="bi bi-briefcase"></i>' +
          '<h4>No tiene servicios contratados</h4>' +
          '<p>Explore nuestro catalogo para contratar servicios profesionales</p>' +
          '<a href="catalogo.html" class="btn btn-primary-custom">Ver catalogo</a>' +
        '</div>';
      return;
    }

    var html = '';
    allServices.forEach(function (service) {
      var icon = serviceIcons[service.id] || 'bi-briefcase';
      var detail = serviceDetails[service.id] || {
        tipo: 'Servicio',
        formulario: 'N/A',
        descripcion: 'Servicio profesional contratado'
      };
      var dateStr = 'N/A';
      if (service.date) {
        var d = new Date(service.date);
        dateStr = d.getDate() + ' ' + meses[d.getMonth()] + ' ' + d.getFullYear();
      }

      html +=
        '<div class="service-item">' +
          '<div class="service-item-header">' +
            '<div class="service-item-icon"><i class="bi ' + icon + '"></i></div>' +
            '<div class="service-item-info">' +
              '<strong>' + service.name + '</strong>' +
              '<span>' + detail.tipo + ' &middot; Contratado: ' + dateStr + '</span>' +
            '</div>' +
            '<div class="service-item-right">' +
              '<span class="service-price">' + fc(service.price) + '</span>' +
              '<span class="badge-status al-dia"><i class="bi bi-check2"></i> Activo</span>' +
            '</div>' +
          '</div>' +
          '<div class="service-item-detail">' +
            '<div class="service-detail-row">' +
              '<span><i class="bi bi-file-earmark-text me-1"></i> Formulario:</span>' +
              '<span class="mono">' + detail.formulario + '</span>' +
            '</div>' +
            '<div class="service-detail-row">' +
              '<span><i class="bi bi-info-circle me-1"></i> Descripcion:</span>' +
              '<span>' + detail.descripcion + '</span>' +
            '</div>' +
            '<div class="service-detail-row">' +
              '<span><i class="bi bi-receipt me-1"></i> Orden:</span>' +
              '<span class="mono">' + service.orderNumber + '</span>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

    container.innerHTML = html;
  }

  function renderVencimientos(allServices) {
    var container = document.getElementById('panelVencimientosBody');
    if (!container) return;

    if (allServices.length === 0) {
      container.innerHTML =
        '<div class="empty-state">' +
          '<i class="bi bi-calendar-check"></i>' +
          '<h4>Sin vencimientos pendientes</h4>' +
          '<p>Al contratar servicios, sus vencimientos apareceran aqui</p>' +
        '</div>';
      return;
    }

    var now = new Date();
    var vencimientos = [];

    var serviceIds = {};
    allServices.forEach(function (s) { serviceIds[s.id] = true; });

    for (var i = 0; i < 3; i++) {
      var vencMonth = now.getMonth() + i;
      var vencYear = now.getFullYear();
      if (vencMonth > 11) {
        vencMonth = vencMonth - 12;
        vencYear = vencYear + 1;
      }
      var vencDate = new Date(vencYear, vencMonth, 10);
      if (vencDate <= now) continue;

      var prevMonth = vencMonth === 0 ? 11 : vencMonth - 1;
      var prevYear = vencMonth === 0 ? vencYear - 1 : vencYear;
      var prevMonthName = mesesFull[prevMonth];

      if (serviceIds['dec-mensual'] || serviceIds['gestion-sar']) {
        vencimientos.push({
          date: new Date(vencYear, vencMonth, 10),
          title: 'Declaracion ISV Mensual',
          desc: 'Impuesto sobre ventas - ' + prevMonthName + ' ' + prevYear
        });
      }

      if (serviceIds['dec-mensual'] || serviceIds['contabilidad-gral']) {
        vencimientos.push({
          date: new Date(vencYear, vencMonth, 10),
          title: 'Declaracion ISR Mensual',
          desc: 'Impuesto sobre la renta - ' + prevMonthName + ' ' + prevYear
        });
      }

      if (serviceIds['nominas']) {
        vencimientos.push({
          date: new Date(vencYear, vencMonth, 10),
          title: 'Planilla IHSS/RAP',
          desc: 'Aportaciones patronales - ' + prevMonthName + ' ' + prevYear
        });
      }
    }

    if (serviceIds['isr-anual']) {
      var isrDate = new Date(now.getFullYear(), 3, 30);
      if (isrDate < now) isrDate = new Date(now.getFullYear() + 1, 3, 30);
      vencimientos.push({
        date: isrDate,
        title: 'Declaracion Anual ISR',
        desc: 'Formulario IR-1 - Ejercicio fiscal ' + (isrDate.getFullYear() - 1)
      });
    }

    if (serviceIds['auditoria'] || serviceIds['auditoria-fiscal']) {
      var audMonth = now.getMonth() + 2;
      var audYear = now.getFullYear();
      if (audMonth > 11) { audMonth -= 12; audYear++; }
      vencimientos.push({
        date: new Date(audYear, audMonth, 15),
        title: 'Entrega Dictamen Fiscal',
        desc: 'Informe de auditoria del periodo en curso'
      });
    }

    if (vencimientos.length === 0) {
      var nextVenc = getNextVencimiento();
      vencimientos.push({
        date: nextVenc,
        title: 'Revision fiscal general',
        desc: 'Revision de obligaciones fiscales del periodo'
      });
    }

    vencimientos.sort(function (a, b) { return a.date - b.date; });
    vencimientos = vencimientos.slice(0, 6);

    var html = '';
    vencimientos.forEach(function (v) {
      var days = getDaysUntil(v.date);
      var badgeClass = getBadgeClass(days);
      var badgeText = days + ' dias';
      if (days <= 0) {
        badgeClass = 'urgente';
        badgeText = 'Vencido';
      }
      html +=
        '<div class="deadline-item">' +
          '<div class="deadline-date">' +
            '<span class="day">' + v.date.getDate() + '</span>' +
            '<span class="month">' + meses[v.date.getMonth()] + '</span>' +
          '</div>' +
          '<div class="deadline-info">' +
            '<strong>' + v.title + '</strong>' +
            '<span>' + v.desc + '</span>' +
          '</div>' +
          '<span class="deadline-badge ' + badgeClass + '">' + badgeText + '</span>' +
        '</div>';
    });

    container.innerHTML = html;
  }

  window.openTicketModal = function () {
    var formContainer = document.getElementById('ticketFormContainer');
    var successContainer = document.getElementById('ticketSuccessContainer');
    var form = document.getElementById('ticketForm');
    if (formContainer) formContainer.style.display = 'block';
    if (successContainer) successContainer.style.display = 'none';
    if (form) form.reset();
    form.querySelectorAll('.form-control-custom').forEach(function (el) {
      el.classList.remove('is-invalid', 'is-valid');
    });
    var modal = new bootstrap.Modal(document.getElementById('ticketModal'));
    modal.show();
  };

  function handleTicketSubmit(e) {
    e.preventDefault();
    var telefono = document.getElementById('ticketTelefono');
    var asunto = document.getElementById('ticketAsunto');
    var descripcion = document.getElementById('ticketDescripcion');
    var valid = true;

    [telefono, asunto, descripcion].forEach(function (el) {
      if (!el || !el.value.trim()) {
        if (el) el.classList.add('is-invalid');
        valid = false;
      } else {
        el.classList.remove('is-invalid');
        el.classList.add('is-valid');
      }
    });

    if (!valid) return;

    var btn = document.getElementById('btnTicket');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
    }

    setTimeout(function () {
      var ticketNum = 'TK-' + Date.now().toString(36).toUpperCase();
      var ticketNumEl = document.getElementById('ticketNumber');
      if (ticketNumEl) ticketNumEl.textContent = ticketNum;

      var formContainer = document.getElementById('ticketFormContainer');
      var successContainer = document.getElementById('ticketSuccessContainer');
      if (formContainer) formContainer.style.display = 'none';
      if (successContainer) successContainer.style.display = 'block';

      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-send me-2"></i>Enviar consulta';
      }

      if (typeof showToast === 'function') showToast('Consulta enviada exitosamente', 'success');
    }, 1200);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.auth-form .form-control-custom').forEach(function (input) {
      input.addEventListener('input', function () {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
      });
    });

    var rtnInput = document.getElementById('regRTN');
    if (rtnInput && typeof formatRTNInput === 'function') {
      formatRTNInput(rtnInput);
    }

    var ticketForm = document.getElementById('ticketForm');
    if (ticketForm) {
      ticketForm.addEventListener('submit', handleTicketSubmit);
      ticketForm.querySelectorAll('.form-control-custom').forEach(function (input) {
        input.addEventListener('input', function () {
          input.classList.remove('is-invalid');
          input.classList.remove('is-valid');
        });
      });
    }
  });
})();
