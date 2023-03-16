import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const links = [
  {
    to: "#home",
    name: "Home",
    isActive: true,
  },
  {
    to: "#about-us",
    name: "Sobre mí",
    isActive: false,
  },
  {
    to: "#skills",
    name: "Habilidades",
    isActive: false,
  },
  {
    to: "#proyects",
    name: "Proyectos",
    isActive: false,
  },
  {
    to: "#contact",
    name: "Contacto",
    isActive: false,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="fixed z-50 w-full text-white bg-azul-marino-oscuro">
        <div className="max-w-[1000px] flex justify-between w-full m-auto item-center">

          {/* Icono */}
          <div className="min-h-[64px] flex items-center justify-end">
            <a href="/" className="left-0 px-4 py-2 text-20">
              Alvaro<span className="font-black ">HJ</span>
            </a>
          </div>

          {/* Menú item */}
          <div className="min-[920px]:hidden min-h-[64px] flex items-center">
            {isOpen ? (
              <AiOutlineClose
                onClick={handleClickMenu}
                className="p-2 cursor-pointer "
                size={44}
              />
            ) : (
              <HiOutlineMenuAlt3
                onClick={handleClickMenu}
                className="p-2 cursor-pointer"
                size={44}
              />
            )}
          </div>

          {/* Links */}
          <nav className="hidden gap-2 text-right min-[920px]:flex min-[920px]:items-center">
            {links.map((link, index) => (
              <a
                key={index}
                className={`px-4 py-2 transition-all border-b-2 ${
                  link.isActive
                    ? "border-b-azul-verdoso"
                    : "border-b-transparent"
                }`}
                href={link.to}
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* <nav className="flex-col items-end justify-center flex-1 hidden gap-4 text-right min-[920px]:flex">
            {links.map((link, index) => (
              <a
                key={index}
                className={`px-4 py-2 transition-all border-b-2 hover:text-32 ${
                  link.isActive
                    ? "border-b-azul-verdoso text-32"
                    : "border-b-transparent"
                }`}
                href={link.to}
              >
                {link.name}
              </a>
            ))}
          </nav> */}
        </div>
      </nav>
      {/* <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <a className={styles.active} href="#home">
                    Home
                </a>
                <a href="#about">Sobre mí</a>
                <a href="#proyects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </div> */}
    </>
  );
}
