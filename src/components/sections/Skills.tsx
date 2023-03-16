import React from "react";
import Section from "../layouts/Section";

const skills = [
  {
    category: "Programación",
    skills: [
      {
        name: "HTML/5",
        rating: 4,
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
        rating: 5,
      },
      {
        name: "Docker",
        rating: 5,
      },
    ],
  },
  {
    category: "Lenguaje",
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
        rating: 5,
      },
      {
        name: "Figma",
        rating: 5,
      },
      {
        name: "Jira/Atlassian",
        rating: 5,
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
  return (
    <Section id="skills">
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 pt-16 item-center">
        <h2 className="font-black uppercase text-32">
          Mis <span className="text-azul-verdoso">habilidades</span>
        </h2>
        <div className="flex flex-col w-full gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:grid-flow-col">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:first:row-span-2">
              <h3 className="mb-4 font-black text-center text-20">
                {skill.category}
              </h3>
              {skill.skills.map((skill, index) => (
                <div className="flex justify-between" key={index}>
                  <p>{skill.name}</p>
                  <div className="flex gap-2">
                    {[...Array(skill.rating)].map((i, index) => (
                      <div key={index} className="w-4 h-4 border-2 rounded-full bg-azul-verdoso border-azul-verdoso"></div>
                    ))}
                    {[...Array(5 - skill.rating)].map((i, index) => (
                      <div key={index} className="w-4 h-4 bg-transparent border-2 rounded-full border-azul-verdoso"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
