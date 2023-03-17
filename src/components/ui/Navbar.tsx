import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { checkIfSectionIsVisible } from "../../utils/index";

const initLinks = [
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

  const [links, setLinks] = useState(initLinks)

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }
  
  function handleClickLink (){
    setTimeout(() => {
      setLinks(
        links.map((link) =>
          link.to === window.location.hash ? { ...link, isActive: true } : { ...link, isActive: false }
        )
      );
    }, 10);
  }

  return (
    <>
      <nav className="fixed z-50 w-full text-white bg-background">
        <div className="max-w-[1000px] flex justify-between w-[90%] m-auto item-center">
          {/* Icono */}
          <div className="min-h-[64px] flex items-center justify-end">
            <a href="#home" className="left-0 px-4 py-2 text-20">
              Alvaro<span className="font-black ">HJ</span>
            </a>
          </div>

          {/* Menú item */}
          <div className="md:hidden min-h-[64px] flex items-center">
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
          <nav className="hidden text-right md:flex md:items-center">
            {links.map((link, index) => (
              <a
                onClick={handleClickLink}
                key={index}
                className={`px-4 py-2 transition-all border-b-2 ${
                  link.isActive ? "border-b-main" : "border-b-transparent"
                }`}
                href={link.to}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </nav>

      {/* Menu hamburguesa */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed z-40 bg-black h-screen md:hidden transition-opacity ${
          isOpen ? "bg-opacity-50 w-full" : " bg-opacity-0 w-0"
        }`}
      >
        <div
          className={`flex relative flex-col h-full pt-16 top-0 w-1/2 bg-main transition-all ${
            isOpen ? "left-0" : "left-[-400px]"
          }`}
        >
          {links.map((link, index) => (
            <a
              key={index}
              className={`text-20 text-white px-4 py-2 transition-all`}
              href={link.to}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
