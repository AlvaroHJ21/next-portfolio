import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { checkIfSectionIsVisible } from "../../utils/index";
import ButtonMode from "./ButtonMode";

const initLinks = [
  {
    to: "/#home",
    name: "Home",
    isActive: true,
  },
  {
    to: "/#about-us",
    name: "Sobre mí",
    isActive: false,
  },
  {
    to: "/#skills",
    name: "Habilidades",
    isActive: false,
  },
  {
    to: "/#proyects",
    name: "Proyectos",
    isActive: false,
  },
  {
    to: "/#contact",
    name: "Contacto",
    isActive: false,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [links, setLinks] = useState(initLinks);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickLink() {
    setTimeout(() => {
      setLinks(
        links.map((link) =>
          link.to === window.location.hash
            ? { ...link, isActive: true }
            : { ...link, isActive: false }
        )
      );
    }, 10);
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full text-white bg-white dark:bg-background">
        <div className="container flex justify-between w-[90%] m-auto item-center">
          {/* Icono */}
          <div className="min-h-[64px] flex items-center justify-end">
            <Link
              // onClick={handleClickLink}
              href="/#home"
              className="left-0 px-4 py-2 text-black text-20 dark:text-white"
            >
              <span className="font-bold text-main text-[1.8rem]">{">_"}</span>
              Alvaro<span className="font-black ">HJ</span>
            </Link>
          </div>

          {/* Menú item */}
          <div className="md:hidden min-h-[64px] flex items-center">
            {isOpen ? (
              <AiOutlineClose
                onClick={handleClickMenu}
                className="p-2 cursor-pointer text-main dark:text-white"
                size={44}
              />
            ) : (
              <HiOutlineMenuAlt3
                onClick={handleClickMenu}
                className="p-2 cursor-pointer text-main dark:text-white"
                size={44}
              />
            )}
          </div>

          {/* Links */}
          <nav className="hidden text-right md:flex md:items-center">
            {links.map((link, index) => (
              <Link
                // onClick={handleClickLink}
                key={index}
                className={`px-4 py-2 transition-all border-b-2 border-b-transparent text-black
                 hover:border-b-main hover:text-main
                  dark:text-white dark:hover:text-main
                 `}
                href={link.to}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4">
              <ButtonMode />
            </div>
          </nav>
        </div>
      </nav>

      {/* Menu hamburguesa */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-0 z-40 bg-black h-screen md:hidden backdrop-blur-sm transition-opacity bg-opacity-60 ${
          isOpen ? "w-full" : "w-0"
        }`}
      >
        <div
          className={`absolute right-0 flex  flex-col items-center justify-center gap-2 h-full top-0  transition-all ${
            isOpen ? "w-full" : "w-0 overflow-hidden"
          }`}
        >
          {links.map((link, index) => (
            <a
              key={index}
              className={`text-20 font-bold text-white px-4 py-2 text-center rounded-full hover:bg-main `}
              href={link.to}
            >
              {link.name}
            </a>
          ))}
          <div className="p-2">
            <ButtonMode size={32}/>
          </div>
        </div>
      </div>
    </>
  );
}
