import utils from '../helpers/utils';
import './footer.scss';

const printFooter = () => {
  const domString = `
  <footer class="page-footer">
    <h4>contact</h4>
    <div id="contact">  
      <p id="mail"><a href="mailto:nathanieltylerowens@gmail.com?Subject=Hello%20there!" target="_top"><i class="fas fa-envelope"></i></a></p>
      <p id="github"><a href="https://github.com/nathanieltylerowens"><i class="fab fa-github"></i></a></p>
    </div>
    <h5>© Nathaniel Owens 2020</h5>
  </footer>
  `;
  utils.printToDom('#footer', domString);
};

export default { printFooter };
