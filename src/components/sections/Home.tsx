import { useEffect, useRef } from "react";

import { BsDownload } from "react-icons/bs";
import Typed from "typed.js";
import { RevealWrapper } from "next-reveal";

import Section from "@/components/layouts/Section";
import ButtonIcons from "../ui/ButtonIcons";
import LinkButton from "../ui/LinkButton";

export default function Hero() {
  const typed = useRef<Typed>();

  useEffect(() => {
    if (document.querySelector(".text")) {
      typed.current = new Typed(".text", {
        strings: ["Frontend", "Backend", "Móvil"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }
    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <Section id="home">
      <div className="flex flex-col items-center justify-center min-h-screen text-center gap-14">
        <div className="flex flex-col items-center gap-2 texts">
          <RevealWrapper>
            <p className="text-gray-600 font-regular text-32 dark:text-white">Hola, soy</p>

            <h1 className="font-black font-raleway text-52 text-main">
              Alvaro Huaysara
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2 className="font-bold text-gray-600 font-raleway text-32 dark:text-white">
              Desarrollador <br className="sm:hidden" /> <span className="text"></span>
            </h2>
            <p className="font-regular leading-[1.8] text-black max-w-[520px] text-16 dark:text-white">
              Apasionado por crear soluciones tecnológicas innovadoras y
              eficientes para mejorar la experiencia del usuario. ¡Explora mi
              portafolio y contáctame para hablar sobre tus proyectos!
            </p>
          </RevealWrapper>
        </div>

        {/* Icons */}

        <RevealWrapper origin="bottom">
          <ButtonIcons />
        </RevealWrapper>

        {/* End Icons */}

        <RevealWrapper className="flex flex-col sm:flex-row gap-4">
          <LinkButton text="Ver proyectos" href="#proyects" />
          <LinkButton
            text="Descarga mi CV"
            href="/pdf/CV-AlvaroHJ.pdf"
            target="_blank"
            download="CV-AlvaroHJ.pdf"
            variant="outline"
            prefixIcon={<BsDownload size={24} />}
          />
        </RevealWrapper>
      </div>
    </Section>
  );
}
