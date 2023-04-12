import { CategoriesDatum } from '../interfaces/ProjectsResponse';
import { Category } from '../interfaces/Category';
export default {
  getCategories: async () => {
    const response = await fetch(
      "https://strapi-production-ce00.up.railway.app/api/categories"
    );
    const data = await response.json();
    const categoriesResponse: CategoriesDatum[] = data.data;

    const categories: Category[] = categoriesResponse.map((category) => {
        return {
            id: category.id,
            name: category.attributes.name,
        }
    })

    // console.log(categories);
    return categories;
  },
};
