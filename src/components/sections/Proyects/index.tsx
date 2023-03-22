import { useState, useEffect } from "react";

import { RevealWrapper } from "next-reveal";

import Section from "../../layouts/Section";
import Button from "../../ui/Button";
import { proyects as initialProyects, Proyect } from "../../../data/proyects";
import ProyectCard from "./ProyectCard";
import ProyectCard2 from "./ProyectCard2";

const initialTags = [
  {
    id: 1,
    name: "HTML CSS JS",
    isActive: false,
  },
  {
    id: 2,
    name: "React",
    isActive: true,
  },
  {
    id: 3,
    name: "NodeJS",
    isActive: false,
  },
  {
    id: 4,
    name: "Flutter",
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
    <Section id="proyects">
      <div className="pt-16">
        <div className="flex flex-col items-center gap-8">
          <RevealWrapper>
            <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">proyectos</span>
            </h2>
          </RevealWrapper>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Button
                key={tag.id}
                onClick={() => handleClickTag(tag.id)}
                text={tag.name}
                variant={tag.isActive ? "filled" : "outline"}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyects.map((proyect) => (
              <ProyectCard2 key={proyect.id} proyect={proyect} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
