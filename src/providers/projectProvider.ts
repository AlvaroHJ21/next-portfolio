import { ProjectsResponse } from "../interfaces/ProjectsResponse";
import { Project } from "../interfaces/Project";
import { Category } from "../interfaces/Category";
import { Tecnology } from "../interfaces/Tecnology";
import { Image } from '../interfaces/Image';

export default {
  getProjects: async () => {
    const response = await fetch(
      "https://strapi-production-ce00.up.railway.app/api/projects?populate[0]=cover&populate[1]=tecnologies.img&populate[2]=categories"
    );
    const data: ProjectsResponse = await response.json();
    const projects: Project[] = data.data.map((project) => {
      return {
        id: project.id,
        name: project.attributes.name,
        description: project.attributes.description,
        url: project.attributes.url,
        categories: project.attributes.categories.data.map(
          (category) =>
            ({
              id: category.id,
              name: category.attributes.name,
            } as Category)
        ),
        tecnologies: project.attributes.tecnologies.data.map(
          (tecnology) =>
            ({
              id: tecnology.id,
              name: tecnology.attributes.name,
              img: {
                original: tecnology.attributes.img?.data.attributes.url,
              },
            } as Tecnology)
        ),
        cover: {
          original: project.attributes.cover.data.attributes.url,
          small: project.attributes.cover.data.attributes.formats?.small.url,
          medium: project.attributes.cover.data.attributes.formats?.medium.url,
          large: project.attributes.cover.data.attributes.formats?.large.url,
        } as Image,
      };
    });

    // console.log(projects);
    return projects;
  },
  getProject: async (id: string) => {
    const response = await fetch(
      `https://strapi-production-ce00.up.railway.app/api/projects/${id}?populate[0]=cover&populate[1]=tecnologies.img&populate[2]=categories`
    );
    const project = await response.json();
    return project;
  },
};
