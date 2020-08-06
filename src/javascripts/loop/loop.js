import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';
import './loop.scss';

const loopProjects = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = `
        <h1 class="projectsH1">Projects</h1>
        <div class="fullPage" id="projectsPage">
      `;
      projects.forEach((project) => {
        domString += `
        <div class="projectDiv">
        <img class="screenshotImg" src="${project.screenshot}" alt="${project.title} Screenshot">
        <h4 class="projectH3">${project.title}</h4>
        <p class="descriptionP">${project.description}</p>
        <p class="deployP">`;
        if (project.isDeployed) {
          domString += `<a href="${project.portfolioUrl}"s target="_blank">>>Launch Project</a>`;
        }
        domString += `<a href="${project.githubUrl}">>>GitHub Repo</a></p>
        <p class="techP">${project.technologiesUsed}</p>
        </div>
        `;
      });
      domString += '</div>';
      utils.printToDom('#projectCards', domString);
    })
    .catch((err) => console.error('loop broke', err));
};

export default { loopProjects };
