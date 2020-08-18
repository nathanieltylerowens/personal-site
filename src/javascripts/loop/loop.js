import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';
import './loop.scss';

const loopProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = `
      <div class="projects">
        <h1 class="projectsH1">Projects</h1>
        <div id="projectsPage">
      `;
      projects.forEach((project) => {
        domString += `
        <div class="col-sm projectDiv">
        <img class="screenshotImg" src="${project.screenshot}" alt="${project.title} Screenshot">
        <h3 class="projectH3">${project.title}</h3>
        <p class="descriptionP">${project.description}</p>
        <p class="deployP">`;
        if (project.isDeployed) {
          domString += `<a href="${project.portfolioUrl}"s target="_blank">>>Launch Project</a>`;
        }
        domString += `<a href="${project.githubUrl}"><i class="fab fa-github"></i></a></p>
        <p class="techP">${project.technologiesUsed}</p>
        </div>
        `;
      });
      domString += `
        </div>
      </div>`;
      utils.printToDom('#projectCards', domString);
    })
    .catch((err) => console.error('loop broke', err));
};

export default { loopProjects };
