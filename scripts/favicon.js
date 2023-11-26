const favicon = document.querySelector('link[type="image/svg+xml"]');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');

function changeFavicon(e) {
  if (e.matches) {
    favicon.setAttribute('href', './images/favicon/faviconDark.svg');
  } else {
    favicon.setAttribute('href', './images/favicon/faviconLight.svg');
  }
}

isDark.addEventListener('change', changeFavicon);
