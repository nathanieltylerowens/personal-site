import utils from '../helpers/utils';
import './bioNav.scss';

const buildBio = () => {
  const domString = `
  <div class="mh-100 greeting">
    <h1 class="hi">Hello</h1>
    <div class="row">
      <div class="col"></div>
        <div id="about" class="col-6">
        I'm Nathaniel Owens, but you're more than welcome to call me Nate (most do). 
        I'm a creative that's worked in most mediums, only recently trying my hand at coding.  
        NSS has allowed me to scratch that itch and further my education. 
        Take a look around and feel free to contact me,
        it's a real pleasure having you here.
        </div>
      <div class="col"></div>
    </div>
      <div id="contact">  
        <p id="mail"><a href="mailto:nathanieltylerowens@gmail.com?Subject=Hello%20there!" target="_top"><i class="fas fa-paper-plane"></i></a></p>
        <p id="github"><a href="https://github.com/nathanieltylerowens"><i class="fab fa-github"></i></a></p>
        <p id="github"><a href="https://www.linkedin.com/in/nathaniel-owens-987179b5/"><i class="fab fa-linkedin"></i></a></p>
      </div>
  </div>
  `;
  utils.printToDom('#intro', domString);
};

export default { buildBio };
