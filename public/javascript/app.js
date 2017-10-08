import '../sass/main.scss';

const callback = function onReady() {
  const openButton = document.getElementById('openNav');
  const closeButton = document.getElementById('closeNav');

  function openNav() {
    document.querySelector('.sidenav').style.width = '80%';
  }

  function closeNav() {
    document.querySelector('.sidenav').style.width = '0';
  }

  openButton.addEventListener('click', openNav);
  closeButton.addEventListener('click', closeNav);
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
