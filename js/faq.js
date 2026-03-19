/* === Preguntas Frecuentes === */
(function() {
  'use strict';

  const searchInput = document.getElementById('faqSearchInput');
  const searchClear = document.getElementById('faqSearchClear');
  const searchCount = document.getElementById('faqSearchCount');
  const noResults   = document.getElementById('faqNoResults');
  const container   = document.getElementById('faqContainer');
  if (!container) return;
  const pills       = document.querySelectorAll('.faq-pill');
  const groups      = container.querySelectorAll('.faq-category-group');
  const allItems    = container.querySelectorAll('.accordion-item');

  let activeCategory = 'all';

  pills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      pills.forEach(function(p) {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      activeCategory = this.dataset.category;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      if (searchClear) searchClear.style.display = this.value.length > 0 ? 'block' : 'none';
      applyFilters();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', function() {
      if (searchInput) searchInput.value = '';
      searchClear.style.display = 'none';
      applyFilters();
      if (searchInput) searchInput.focus();
    });
  }

  /* --- Aplicar filtros --- */
  function applyFilters() {
    var query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    var visibleCount = 0;

    groups.forEach(function(group) {
      var groupCat = group.dataset.group;
      var items = group.querySelectorAll('.accordion-item');
      var groupVisible = 0;

      items.forEach(function(item) {
        var question = item.querySelector('.accordion-button').textContent.toLowerCase();
        var answer = item.querySelector('.accordion-body').textContent.toLowerCase();
        var matchesCategory = activeCategory === 'all' || item.dataset.category === activeCategory;
        var matchesSearch = !query || question.includes(query) || answer.includes(query);

        if (matchesCategory && matchesSearch) {
          item.classList.remove('hidden');
          groupVisible++;
          visibleCount++;
        } else {
          item.classList.add('hidden');
          var collapse = item.querySelector('.accordion-collapse');
          if (collapse && collapse.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(collapse).hide();
          }
        }
      });

      var categoryMatch = activeCategory === 'all' || groupCat === activeCategory;
      group.classList.toggle('hidden', !categoryMatch || groupVisible === 0);
    });

    updatePillCounts(query);

    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    container.style.display = visibleCount === 0 ? 'none' : 'block';

    if (query) {
      searchCount.textContent = visibleCount === 1
        ? '1 resultado encontrado'
        : visibleCount + ' resultados encontrados';
    } else {
      searchCount.textContent = '';
    }
  }

  /* --- Actualizar contadores de categorías --- */
  function updatePillCounts(query) {
    var categories = { all: 0, general: 0, impuestos: 0, servicios: 0, pagos: 0, portal: 0 };

    allItems.forEach(function(item) {
      var cat = item.dataset.category;
      var question = item.querySelector('.accordion-button').textContent.toLowerCase();
      var answer = item.querySelector('.accordion-body').textContent.toLowerCase();
      var matchesSearch = !query || question.includes(query) || answer.includes(query);

      if (matchesSearch) {
        categories[cat]++;
        categories.all++;
      }
    });

    document.getElementById('countAll').textContent = categories.all;
    document.getElementById('countGeneral').textContent = categories.general;
    document.getElementById('countImpuestos').textContent = categories.impuestos;
    document.getElementById('countServicios').textContent = categories.servicios;
    document.getElementById('countPagos').textContent = categories.pagos;
    document.getElementById('countPortal').textContent = categories.portal;
  }
})();
