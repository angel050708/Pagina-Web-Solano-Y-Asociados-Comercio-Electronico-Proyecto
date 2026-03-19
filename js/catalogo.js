/* === Catálogo === */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('catalogSearch');
  if (!searchInput) return; // Protección cuando se incluye en otras páginas

  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.catalog-item');
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');
  let activeFilter = 'todos';

  /* --- Filtrado del catálogo --- */
  function filterCatalog() {
    const query = searchInput.value.toLowerCase().trim();
    let visible = 0;

    items.forEach(item => {
      const category = item.getAttribute('data-category');
      const title = (item.getAttribute('data-title') || '').toLowerCase();
      const text = item.textContent.toLowerCase();

      const matchesCategory = activeFilter === 'todos' || category === activeFilter;
      const matchesSearch = !query || title.includes(query) || text.includes(query);

      if (matchesCategory && matchesSearch) {
        item.style.display = '';
        visible++;
      } else {
        item.style.display = 'none';
      }
    });

    if (resultsCount) resultsCount.textContent = visible;
    if (noResults) noResults.classList.toggle('visible', visible === 0);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'todos';
      filterCatalog();
    });
  });

  searchInput.addEventListener('input', filterCatalog);

  filterCatalog();
});
