import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';
import './loop.scss';

const checkpoint = 300;

window.addEventListener('scroll', () => {
  let opacity = 0;
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector('#redH1').style.opacity = opacity;
});

const loopProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = `
      <div class="projects">
        <div id="titleRow" class="row">
          <div class="col"></div>
          <div id="h1Wrapper" class="col-6">
            <h1 id="whiteH1">Projects</h1>
            <h1 id="redH1">Projects</h1>
          </div>
          <div class="col"></div>
        </div>  
      <div class="row" id="projectsPage">
      `;
      projects.forEach((project) => {
        domString += `
        <div class="col-lg-3 projectDiv">
          <a class="projectsH3" href="${project.portfolioUrl}">${project.title}</a>
            <p class="descriptionP">${project.description}</p>
              <a href="${project.githubUrl}"><i id="projectsGit" class="fab fa-github"></i></a>
            <p class="techP">${project.technologiesUsed}</p>
        </div>
        `;
      });
      domString += `
        </div>
        <div class="col techContainer">
          <h3 class="techH3">Technologies</h3>
          <div class="row techIcons">
            <div class="row">
              <i id="techRed" class="fab fa-html5"></i>
              <i id="techBlue" class="fab fa-css3-alt"></i>
              <i id="techYellow" class="fab fa-js-square"></i>
            </div>
            <div class="row">  
              <i id="techRed" class="fab fa-sass"></i>
              <i id="techBlue" class="fab fa-bootstrap"></i>
              <i id="techYellow" class="fab fa-git-alt"></i>
            </div>
          </div>
        </div>
        <footer class="page-footer">
          <h5>© Nathaniel Owens 2020</h5>
        </footer>
      </div>`;
      utils.printToDom('#projectCards', domString);
    })
    .catch((err) => console.error('loop broke', err));
};

export default { loopProjects };
