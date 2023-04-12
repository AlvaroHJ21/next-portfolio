import { useState, useEffect, useMemo } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../../ui/Button";

import ProyectCard3 from "./ProyectCard3";
import { Project } from "@/interfaces/Project";
import { Category } from "@/interfaces/Category";

// const initialCategories: Category[] = [
//   {
//     name: "Todos",
//   },
//   {
//     name: "Landing Page",
//   },
//   {
//     name: "Páginas Web",
//   },
//   {
//     name: "Aplicaciones Web",
//   },
//   {
//     name: "Ecommerce",
//   },
//   {
//     name: "Aplicaciones Móviles",
//   },
// ];

interface Props {
  projects: Project[];
  categories: Category[];
}

export default function Proyects({ projects, categories }: Props) {

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: 0,
    name: "Todos",
  });

  const filteredProyects = useMemo(() => {
    if (selectedCategory.name === "Todos") {
      return projects;
    } else {
      return projects.filter((proyect) =>
        proyect.categories.find(
          (category) => category.name === selectedCategory.name
        )
      );
    }
  }, [projects, selectedCategory]);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleClickTag(category: Category) {
    setSelectedCategory(category);
  }

  return (
    <section id="proyects" className="bg-gray-50 dark:bg-background-light">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-20">
          <div className="flex flex-col items-center gap-8">
            <div data-aos="fade-down">
              <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
                Mis <span className="text-main">proyectos</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration={500 + 200 * index}
                  key={category.name}
                >
                  <Button
                    onClick={() => handleClickTag(category)}
                    text={category.name}
                    variant={
                      selectedCategory?.name === category.name
                        ? "filled"
                        : "outline"
                    }
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredProyects.map((project) => (
                <div data-aos="fade-up" key={project.id}>
                  <ProyectCard3 project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
