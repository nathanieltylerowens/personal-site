import utils from '../helpers/utils';
import './footer.scss';

const printFooter = () => {
  const domString = `
  <footer class="page-footer">
    <h5>© Nathaniel Owens 2020</h5>
  </footer>
  `;
  utils.printToDom('#footer', domString);
};

export default { printFooter };
