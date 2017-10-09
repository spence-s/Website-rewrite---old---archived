/*
 * Simply attaches an element to the opening closing functionality
 * of the side nav.
 *
*/

export default function nav(openElem, openWidth) {
  // throw if wrong argument is passed
  if (openElem.length) throw new Error('Argument must be a single node');

  function openNav() {
    if (window.innerWidth < 500) {
      document.querySelector('.sidenav').style.width = '100%';
    } else {
      document.querySelector('.sidenav').style.width = openWidth || '100%';
    }
  }

  function closeNav() {
    document.querySelector('.sidenav').style.width = '0';
  }

  function init() {
    const openButton = openElem;
    const closeButton = document.getElementById('closeNav');
    openButton.addEventListener('click', openNav);
    closeButton.addEventListener('click', closeNav);
  }

  return init(openElem);
}
