import '../sass/main.scss';
import documentReady from './ready';
import nav from './nav';
import getList from './lister';

// start javascript here
documentReady(() => {
  console.log('Document is ready to be operated on! \nNurse!,pass me the scalpal!');
  nav(document.getElementById('openNav'), '40%');
  getList();
});
