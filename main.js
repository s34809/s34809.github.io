// ---------- Mobile nav toggle ----------
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ---------- Portfolio filter ----------
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const entries = document.querySelectorAll('#entryList .entry');
  if (!buttons.length || !entries.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');
      entries.forEach(function (entry) {
        const show = filter === 'all' || entry.getAttribute('data-type') === filter;
        entry.style.display = show ? '' : 'none';
      });
    });
  });
})();
