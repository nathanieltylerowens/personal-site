import utils from '../helpers/utils';
import './bioNav.scss';

const buildBio = () => {
  const domString = `
  <header class="greeting">
    <h1 class="hi">Hello!</h1>
    <h1 class="name">I'm Nathaniel Owens</h1>
  </header>
  <ul id="bioPage">
    <li class="left">indiana born</li>
    <li class="right">illinois raised</li>
    <li class="left">new hampshire educated</li>
    <li class="right">vegas engaged</li>
    <li class="left">nashville developer</li>
  </ul>`;
  utils.printToDom('#intro', domString);
};

export default { buildBio };
