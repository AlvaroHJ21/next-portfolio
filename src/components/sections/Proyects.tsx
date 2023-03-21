import { useState } from "react";

import { RevealWrapper } from "next-reveal";

import Section from "../layouts/Section";
import Button from "../ui/Button";

type NameCategory = "React" | "Mongodb" | "Flutter" | "Express" | "Nodejs";

interface Proyect {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  categories: { name: NameCategory }[];
}

const initialProyects: Proyect[] = [
  {
    id: 1,
    title: "Audífonos TechPRO",
    subtitle: "Landing Page",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-audifonos.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 2,
    title: "Best Seller Books",
    subtitle: "Eccomerce",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-book-ecommerce.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 3,
    title: "Arquitectura Bosque",
    subtitle: "Landing Page",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-bosque.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 4,
    title: "La Cafetería",
    subtitle: "Página Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-cafeteria.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 5,
    title: "Tiendas Muebles",
    subtitle: "Página Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-muebles.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 6,
    title: "Mis Pokemons",
    subtitle: "Aplicación Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-pokemon.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 7,
    title: "¿Quién es ese Pokemón?",
    subtitle: "Aplicación Web",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-pokemon-2.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
  {
    id: 8,
    title: "eWallet",
    subtitle: "Landing Page",
    description:
      "Ullamco culpa proident voluptate nostrud elit incididunt eiusmod adipisicing. Dolor eiusmod et tempor ex nostrud cillum anim non magna voluptate.",
    image: "/img/cover-wallet.webp",
    categories: [
      { name: "Mongodb" },
      { name: "Express" },
      { name: "React" },
      { name: "Nodejs" },
    ],
  },
];

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
  const [proyects, setProyects] = useState(initialProyects);

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
          <div className="flex flex-col gap-12 ">
            {proyects.map((proyect) => (
              <RevealWrapper
                origin="bottom"
                key={proyect.id}
                className="flex flex-col-reverse gap-4 md:gap-8 md:flex-row md:items-center"
              >
                <div className="block h-1 m-auto w-36 bg-main md:hidden"></div>
                {/* Imagen del proyecto */}
                <div className="overflow-hidden">
                  <img
                    src={proyect.image}
                    alt={proyect.title}
                    className="transition-transform duration-300 cursor-pointer hover:scale-110"
                  />
                </div>

                {/* Textos del proyecto */}
                <div className="flex flex-col gap-4 md:justify-center">
                  <h3 className="font-bold text-gray-600 text-20 dark:text-white">
                    {proyect.title}
                  </h3>
                  <h4 className="text-gray-500 dark:text-gray-300 subtitle">
                    {proyect.subtitle}
                  </h4>
                  <p className="text-black dark:text-white">
                    {proyect.description}
                  </p>
                  <div className="hidden h-1 m-auto w-36 bg-main md:block"></div>
                </div>
                
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
