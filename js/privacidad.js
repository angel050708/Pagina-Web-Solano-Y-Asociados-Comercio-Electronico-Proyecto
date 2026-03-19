/* === Privacidad === */
(function () {
  /* --- Banner de cookies --- */
  (function () {
    var banner = document.getElementById('cookieBanner');
    var acceptBtn = document.getElementById('cookieAccept');
    var declineBtn = document.getElementById('cookieDecline');

    if (!banner) return;

    if (localStorage.getItem('cookie_consent') !== null) {
      banner.classList.add('hidden');
    }

    acceptBtn?.addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'accepted');
      banner.classList.add('hidden');
    });

    declineBtn?.addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'declined');
      banner.classList.add('hidden');
    });
  })();

  /* --- Resaltado activo del índice --- */
  (function () {
    var sections = document.querySelectorAll('.legal-section');
    var tocLinks = document.querySelectorAll('.legal-toc ol li a');
    if (!sections.length || !tocLinks.length) return;

    function onScroll() {
      var scrollY = window.scrollY + 120;
      var current = '';
      sections.forEach(function (s) {
        if (s.offsetTop <= scrollY) current = s.id;
      });
      tocLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();
})();
