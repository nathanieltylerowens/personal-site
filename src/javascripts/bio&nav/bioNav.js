import utils from '../helpers/utils';
import './bioNav.scss';

const buildBio = () => {
  const domString = `
  <header class="greeting">
    <h1 class="hi">Hello</h1>
    <p class="about">I'm Nathaniel Owens, but you're more than welcome to call me Nate (most do). 
    I'm a creative that's worked in most mediums, only recently trying my hand at coding.  
    NSS has allowed me to scratch that itch and further my education. 
    Take a look around and feel free to contact me,
     it's a real pleasure having you here.</p>
  </header>`;
  utils.printToDom('#intro', domString);
};

export default { buildBio };
