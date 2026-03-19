/* === Contacto === */
(function () {
  /* --- Validación del formulario de contacto --- */
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    form.querySelectorAll('.form-control-custom').forEach(function(input) {
      input.classList.remove('is-invalid', 'is-valid');
    });

    const nombre = document.getElementById('nombreCompleto');
    const correo = document.getElementById('correoElectronico');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    if (!nombre.value.trim()) {
      nombre.classList.add('is-invalid');
      isValid = false;
    } else {
      nombre.classList.add('is-valid');
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.value.trim()) {
      correo.classList.add('is-invalid');
      correo.nextElementSibling.textContent = 'Ingrese su correo electronico.';
      isValid = false;
    } else if (!emailRegex.test(correo.value)) {
      correo.classList.add('is-invalid');
      correo.nextElementSibling.textContent = 'Ingrese un correo electronico valido.';
      isValid = false;
    } else {
      correo.classList.add('is-valid');
    }

    if (!asunto.value) {
      asunto.classList.add('is-invalid');
      isValid = false;
    } else {
      asunto.classList.add('is-valid');
    }

    if (!mensaje.value.trim()) {
      mensaje.classList.add('is-invalid');
      isValid = false;
    } else {
      mensaje.classList.add('is-valid');
    }

    if (isValid) {
      showToast('Mensaje enviado con exito! Nos pondremos en contacto pronto.', 'success');
      form.reset();
      form.querySelectorAll('.form-control-custom').forEach(function(input) {
        input.classList.remove('is-valid');
      });
    }
  });

  form.querySelectorAll('.form-control-custom').forEach(function(input) {
    input.addEventListener('input', function() {
      this.classList.remove('is-invalid');
    });
    input.addEventListener('change', function() {
      this.classList.remove('is-invalid');
    });
  });
})();
