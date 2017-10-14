import '../sass/main.scss';
import documentReady from './ready';
import nav from './nav';
import Barba from './barba-config';

// start javascript here
documentReady(() => {
  nav(document.getElementById('openNav'), '30%');
  Barba.Pjax.start();
});
