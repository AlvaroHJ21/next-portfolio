import AOS from "aos";
import "aos/dist/aos.css";

import Section from "../layouts/Section";
import { useEffect } from "react";
import Carousel from "../ui/carousel/Carousel";

const skills = [
  {
    category: "Programación",
    skills: [
      {
        name: "HTML/5",
        rating: 6,
      },
      {
        name: "CSS/3",
        rating: 6,
      },
      {
        name: "Javascript/ES6",
        rating: 5,
      },
      {
        name: "SASS",
        rating: 5,
      },
      {
        name: "React",
        rating: 6,
      },
      {
        name: "TailwindCSS",
        rating: 5,
      },
      {
        name: "MaterialUI",
        rating: 5,
      },
      {
        name: "NextJS",
        rating: 4,
      },
      {
        name: "Bootstrap",
        rating: 3,
      },
      {
        name: "Vue",
        rating: 4,
      },
      {
        name: "Angular",
        rating: 4,
      },
      {
        name: "NodeJS/Express",
        rating: 5,
      },
      {
        name: "NestJS",
        rating: 3,
      },
      {
        name: "Typescript",
        rating: 5,
      },
      {
        name: "Laravel 9",
        rating: 4,
      },
      {
        name: "MySQL",
        rating: 4,
      },
      {
        name: "Postgress",
        rating: 5,
      },
      {
        name: "MongoDB",
        rating: 4,
      },
      {
        name: "Firebase",
        rating: 4,
      },
      {
        name: "Wordpress",
        rating: 3,
      },
      {
        name: "Dart/Flutter",
        rating: 4,
      },
    ],
  },
  {
    category: "Idiomas",
    skills: [
      {
        name: "Español",
        rating: 6,
      },
      {
        name: "Inglés",
        rating: 2,
      },
    ],
  },
  {
    category: "Herramientas/Otros",
    skills: [
      {
        name: "Git/Gihub",
        rating: 5,
      },
      {
        name: "Docker",
        rating: 3,
      },
      {
        name: "Figma",
        rating: 6,
      },
      {
        name: "UX/UI",
        rating: 4,
      },
      {
        name: "Jira/Atlassian",
        rating: 4,
      },
      {
        name: "Scrumm/Agile",
        rating: 5,
      },
    ],
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Section id="skills">
        <div className="flex flex-col items-center justify-center gap-8 py-20 md:justify-start item-center">
          <div data-aos="fade-down">
            <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
              Mis <span className="text-main">habilidades</span>
            </h2>
          </div>

          <div className="flex flex-col w-full gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:grid-flow-col">
            {skills.map((skill, index) => (
              <div key={index} className="w-full md:first:row-span-2">
                <h3 className="mb-4 font-black text-center text-gray-600 text-20 dark:text-white">
                  {skill.category}
                </h3>
                <div className="flex flex-col gap-2">
                  {skill.skills.map((skill, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-offset="80"
                      className="flex justify-between"
                      key={index}
                    >
                      <p className="text-black dark:text-white">{skill.name}</p>
                      <div className="flex gap-2">
                        {[...Array(skill.rating)].map((i, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 border-2 rounded-full bg-main border-main"
                          ></div>
                        ))}
                        {[...Array(6 - skill.rating)].map((i, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 bg-transparent border-2 rounded-full border-main"
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Carousel />
    </>
  );
}
