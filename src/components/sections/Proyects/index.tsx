import { useState, useEffect, useMemo } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../../ui/Button";
import {
  proyects as initialProyects,
  Proyect,
  Category,
} from "../../../data/proyects";
import ProyectCard2 from "./ProyectCard2";
import ProyectCard3 from './ProyectCard3';

const initialCategories: Category[] = [
  {
    name: "Todos",
  },
  {
    name: "Landing Page",
  },
  {
    name: "Páginas Web",
  },
  {
    name: "Aplicaciones Web",
  },
  {
    name: "Ecommerce",
  },
  {
    name: "Aplicaciones Móviles",
  },
];

export default function Proyects() {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    name: "Todos",
  });

  const [proyects, setProyects] = useState<Proyect[]>([]);

  const filteredProyects = useMemo(() => {
    if (selectedCategory.name === "Todos") {
      return proyects;
    } else {
      return proyects.filter((proyect) =>
        proyect.categories.find(
          (category) => category.name === selectedCategory.name
        )
      );
    }
  }, [proyects, selectedCategory]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setProyects(initialProyects);
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
              {filteredProyects.map((proyect) => (
                <div data-aos="fade-up" key={proyect.id}>
                  <ProyectCard3 proyect={proyect} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
