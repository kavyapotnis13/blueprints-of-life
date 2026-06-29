(function () {
  var prefix = window.location.pathname.indexOf('/posts/') > -1 ? '../' : '';

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
