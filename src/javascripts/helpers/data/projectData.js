import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/projects.json`)
    .then((response) => {
      const projectObjs = response.data;
      const projects = [];
      Object.keys(projectObjs).forEach((projectId) => {
        projectObjs[projectId].id = projectId;
        projects.push(projectObjs[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
