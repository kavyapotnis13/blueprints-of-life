(function () {
  var prefix = window.location.pathname.indexOf('/posts/') > -1 ? '../' : '';

  var SPOTIFY_URL = 'https://open.spotify.com/show/6hOmt4NHFxpv90AKb5mOht';
  var LINKEDIN_URL = 'https://www.linkedin.com/in/kavya-potnis-56a289369/';
  var SPOTIFY_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.59 14.42c-.19.3-.58.39-.88.2-2.42-1.48-5.47-1.81-9.05-1-.34.08-.68-.14-.76-.48s.14-.68.48-.76c3.94-.9 7.32-.52 10.05 1.16.3.19.4.58.16.88zm1.22-2.68c-.24.37-.72.49-1.09.26-2.77-1.7-6.99-2.19-10.27-1.2-.42.13-.86-.11-.98-.52a.784.784 0 0 1 .52-.98c3.75-1.14 8.4-.59 11.56 1.35.37.23.49.72.26 1.09zm.11-2.79c-3.32-1.97-8.79-2.15-11.96-1.19a.941.941 0 0 1-1.17-.63c-.15-.5.14-1.02.63-1.17 3.64-1.1 9.68-.89 13.5 1.38a.94.94 0 0 1 .33 1.29c-.27.44-.85.58-1.33.32z"/></svg>';
  var LINKEDIN_SVG = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z"/></svg>';

  var headerInner = document.querySelector('header.site .site-inner');
  if (headerInner) {
    var headerSocial = document.createElement('div');
    headerSocial.className = 'header-social';
    headerSocial.innerHTML =
      '<a href="' + SPOTIFY_URL + '" target="_blank" rel="noopener" aria-label="Listen on Spotify">' + SPOTIFY_SVG + '</a>' +
      '<a href="' + LINKEDIN_URL + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + LINKEDIN_SVG + '</a>';
    var menuBtn = headerInner.querySelector('.menu-toggle');
    if (menuBtn) headerInner.insertBefore(headerSocial, menuBtn);
    else headerInner.appendChild(headerSocial);
  }

  var sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.setAttribute('aria-hidden', 'true');
  sidebar.innerHTML =
    '<button class="sidebar__close" aria-label="Close menu">&times;</button>' +
    '<nav class="sidebar__nav">' +
      '<a href="' + prefix + 'index.html">Home</a>' +
      '<a href="' + prefix + 'episodes.html">Episodes</a>' +
      '<a href="' + prefix + 'articles.html">Articles</a>' +
      '<a href="' + prefix + 'about.html">About</a>' +
    '</nav>';
  document.body.appendChild(sidebar);

  var backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  document.body.appendChild(backdrop);

  var toggle = document.querySelector('.menu-toggle');
  var closeBtn = sidebar.querySelector('.sidebar__close');

  function open() {
    document.body.classList.add('sidebar-open');
    sidebar.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    document.body.classList.remove('sidebar-open');
    sidebar.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('sidebar-open')) close();
  });
})();
