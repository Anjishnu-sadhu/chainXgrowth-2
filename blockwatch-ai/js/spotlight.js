/* Cursor spotlight on cards */
(function () {
  const cards = document.querySelectorAll('.card, .feature-card, .info-card');
  cards.forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', e.clientX - r.left + 'px');
    c.style.setProperty('--my', e.clientY - r.top + 'px');
  }));
})();
