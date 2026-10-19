// Theme switch: follows the system by default; the choice is remembered on this device.
(function () {
  const btn = document.getElementById('theme');
  if (!btn) return;
  const root = document.documentElement;
  const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const label = () => { btn.textContent = current() === 'dark' ? 'Light theme' : 'Dark theme'; };
  label();
  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
})();

// The demo apps sleep when nobody is using them. Wake them as soon as someone opens this
// page, so they're ready by the time a visitor clicks "Live demo".
(function () {
  if (!document.querySelector('a[href*="onrender.com"]')) return;
  ['https://bevbnb-la31.onrender.com/api/spots', 'https://be-leaf.onrender.com/api/plants', 'https://discordia-nmgn.onrender.com/']
    .forEach(function (u) { try { fetch(u, { mode: 'no-cors', cache: 'no-store' }).catch(function () {}); } catch (e) {} });
})();
