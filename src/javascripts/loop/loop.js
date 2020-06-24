import utils from '../helpers/utils';

const projects = [

  {
    title: 'Product Cards',
    screenshot: 'images/productcard1.jpg',
    description: 'The first exercise at NSS. The goal of the exercise was to create a grid of product cards with CSS, HTML, and flexbox. Here I have created a grid of "The Best Product".',
    technologiesUsed: 'HTML, CSS, Version Control with Github',
    available: false,
    url: 'https://github.com/nathanieltylerowens/product-cards',
    githubUrl: 'https://github.com/nathanieltylerowens/product-cards',
  },
  {
    title: 'Pet Adoption Site',
    screenshot: 'images/petadopt1.jpg',
    description: 'The second exercise at NSS. The goal of the exercise was to create a pet adoption site using print to dom JS.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nathanieltylerowens/pet-adoption',
    githubUrl: 'https://github.com/nathanieltylerowens/pet-adoption',
  },
  {
    title: 'Sorting Hat',
    screenshot: 'images/sortinghat3.jpg',
    description: 'The fourth exercise at NSS. The goal of the exercise was to create a site that sorted viewers using Bootstrap with the print to dom JS.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nathanieltylerowens/sorting-hat',
    githubUrl: 'https://github.com/nathanieltylerowens/sorting-hat',
  },
];

const buildProjectCards = () => {
  let domString = '';

  for (let i = 0; i < projects.length; i + 1) {
    if (projects[i].available === true) {
      domString += `<div class='projectCards'>
        <img src="${projects[i].screenshot}" width="500" height="300">
        <h3 class="projects">Cool Project: ${projects[i].title}</h3>
        <p class="projectScripts">${projects[i].technologiesUsed}</p>
        <p class="description">${projects[i].description}</p>
        <h5 class="url"><a href=${projects[i].url}>Visit here</a></h5>
        <h5 class="gitUrl"><a href=${projects[i].githubUrl}>Git here</h5>;
        </div>`;
    }
  }
  utils.printToDom('#projectCards', domString);
};

export default { buildProjectCards };
