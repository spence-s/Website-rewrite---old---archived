import '../sass/main.scss';
import documentReady from './ready';
import nav from './nav';

// start javascript here
documentReady(() => {
  nav(document.getElementById('openNav'), '30%');
});
