/*
 * Simply attaches an element to the opening closing functionality
 * of the side nav.
 *
*/

export default function nav(openElem) {
  // throw if wrong argument is passed
  if (openElem.length) throw new Error('Argument must be a single node');

  function openNav() {
    document.querySelector('.sidenav').style.width = '80%';
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
