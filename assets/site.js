// Theme switch: dark by default; the choice is remembered on this device.
(function () {
  const btn = document.getElementById('theme');
  if (!btn) return;
  const root = document.documentElement;
  const current = () => root.dataset.theme || 'dark';
  const label = () => {
    const dark = current() === 'dark';
    btn.querySelector('.ico').textContent = dark ? '☀' : '☾';
    btn.querySelector('.lbl').textContent = dark ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  };
  label();
  btn.addEventListener('click', () => {
    root.dataset.theme = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
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
