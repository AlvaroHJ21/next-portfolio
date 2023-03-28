import { useEffect } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@/components/ui/Button";
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about-us" className="bg-gray-50 dark:bg-background-light">
      <div className="max-[1200px] w-[90%] m-auto">
        <div className="flex flex-col-reverse items-center justify-center min-h-screen gap-8 py-20 md:flex-row md:justify-center">
          {/* Imagen */}
          <div data-aos="fade-down" className="">
            <div className="max-w-sm m-auto">
              <Image
                className="object-cover w-full h-auto transition-transform duration-300 cursor-pointer hover:scale-110"
                src="/img/my-perfil.webp"
                alt="perfil"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Texto y cta */}
          <div data-aos="fade-up" className="">
            <div className="flex flex-col items-center gap-4 md:items-start md:flex-1">
              <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
                Sobre <span className="text-main">mí</span>
              </h2>

              <p className="max-w-md leading-8 text-center text-black md:text-left dark:text-white">
                ¡Hola! Soy un desarrollador web con experiencia en frontend,
                backend y desarrollo móvil. Me apasiona crear soluciones
                tecnológicas innovadoras y eficientes para mejorar la
                experiencia del usuario. Mi enfoque es siempre centrado en el
                usuario y en la calidad del código. Si buscas un desarrollador
                web confiable, creativo y orientado a resultados, estás en el
                lugar correcto. ¡Explora mi portafolio y ponte en contacto
                conmigo para hablar sobre tus proyectos!
              </p>
              {/* <div className="text-white"> */}
              <LinkButton
                href="/#contact"
                text="Saber más"
                suffixIcon={<AiOutlineArrowRight size={24} />}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// bg-cyan-200
