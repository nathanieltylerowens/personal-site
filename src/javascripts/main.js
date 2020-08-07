import 'bootstrap';
import '../styles/main.scss';
import loop from './loop/loop';
import bioNav from './bio&nav/bioNav';
import footer from './footer/footer';

const init = () => {
  loop.loopProjects();
  bioNav.buildBio();
  footer.printFooter();
};

init();
