import AOS from "aos";
import "aos/dist/aos.css";

import Section from "../layouts/Section";
import { useEffect } from 'react';

const skills = [
  {
    category: "Programación",
    skills: [
      {
        name: "HTML/5",
        rating: 5,
      },
      {
        name: "CSS/3",
        rating: 5,
      },
      {
        name: "Javascript/EMC6",
        rating: 5,
      },
      {
        name: "Sass",
        rating: 5,
      },
      {
        name: "Tailwind 3.x",
        rating: 5,
      },
      {
        name: "PHP 8.1",
        rating: 3,
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
        name: "JSON",
        rating: 5,
      },
      {
        name: "GIT",
        rating: 4,
      },
      {
        name: "Docker",
        rating: 3,
      },
    ],
  },
  {
    category: "Idiomas",
    skills: [
      {
        name: "Español",
        rating: 5,
      },
      {
        name: "Inglés",
        rating: 3,
      },
    ],
  },
  {
    category: "Herramientas/Otros",
    skills: [
      {
        name: "Gihub",
        rating: 4,
      },
      {
        name: "Figma",
        rating: 5,
      },
      {
        name: "Jira/Atlassian",
        rating: 4,
      },
      {
        name: "Scrumm/Agile",
        rating: 5,
      },
      {
        name: "Postman/Insomnia",
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
                  <div data-aos="fade-up" data-aos-offset="80" className="flex justify-between" key={index}>
                    <p className="text-black dark:text-white">{skill.name}</p>
                    <div className="flex gap-2">
                      {[...Array(skill.rating)].map((i, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 border-2 rounded-full bg-main border-main"
                        ></div>
                      ))}
                      {[...Array(5 - skill.rating)].map((i, index) => (
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
  );
}
