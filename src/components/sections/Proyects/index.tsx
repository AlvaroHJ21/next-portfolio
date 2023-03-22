import { useState, useEffect } from "react";

import { RevealWrapper } from "next-reveal";

import Button from "../../ui/Button";
import { proyects as initialProyects, Proyect } from "../../../data/proyects";
import ProyectCard2 from "./ProyectCard2";

const initialTags = [
  {
    id: 1,
    name: "Todos",
    isActive: false,
  },
  {
    id: 2,
    name: "Desarrollo Web",
    isActive: true,
  },
  {
    id: 3,
    name: "Full Stack",
    isActive: false,
  },
  {
    id: 4,
    name: "Móvil",
    isActive: false,
  },
];

export default function Proyects() {
  const [tags, setTags] = useState(initialTags);
  const [proyects, setProyects] = useState<Proyect[]>([]);

  useEffect(() => {
    setProyects(initialProyects);
  }, []);

  function handleClickTag(id: number) {
    setTags(
      tags.map((tag) =>
        tag.id === id
          ? {
              ...tag,
              isActive: !tag.isActive,
            }
          : tag
      )
    );
  }

  return (
    <section id="proyects" className="bg-gray-50 dark:bg-background-light">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <div className="py-20">
          <div className="flex flex-col items-center gap-8">
            <RevealWrapper>
              <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
                Mis <span className="text-main">proyectos</span>
              </h2>
            </RevealWrapper>
            <div className="flex flex-wrap justify-start gap-2 md:justify-center">
              {tags.map((tag) => (
                <Button
                  key={tag.id}
                  onClick={() => handleClickTag(tag.id)}
                  text={tag.name}
                  variant={tag.isActive ? "filled" : "outline"}
                />
              ))}
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {proyects.map((proyect) => (
                <ProyectCard2 key={proyect.id} proyect={proyect} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
