import projectsService from '../service/projectsService.js';
import projectsView from '../view/projectsView.js';

export async function init() {
  const projects = await projectsService.fetchRepos();
  projectsView.render(projects);
}
