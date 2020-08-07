import 'bootstrap';
import '../styles/main.scss';
import loop from './loop/loop';
import bioNav from './bio&nav/bioNav';

const init = () => {
  loop.loopProjects();
  bioNav.buildBio();
};

init();
