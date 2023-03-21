import { AiOutlineArrowRight } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

import Section from "@/components/layouts/Section";
import Button from "@/components/ui/Button";

export default function AboutMe() {
  return (
    <Section id="about-us">
      <div className="flex flex-col-reverse items-center justify-center min-h-screen gap-8 pt-16 md:flex-row md:pt-0 md:justify-center">
        
        {/* Imagen */}
        <RevealWrapper origin="bottom" reset className="flex justify-center md:flex-1">
          <div className="relative flex justify-center max-w-sm w-fit">
              <img
                className="object-cover max-w-full transition-transform duration-300 cursor-pointer hover:scale-110"
                src="/img/my-perfil.webp"
                alt="perfil"
                width={384}
                height={384}
              />
          </div>
        </RevealWrapper>

        {/* Texto y cta */}
        <RevealWrapper origin="top" reset className="">
          <div className="flex flex-col items-center gap-4 md:items-end">
            <h2 className="font-black text-gray-600 uppercase text-32 dark:text-white">
              Sobre <span className="text-main">mí</span>
            </h2>

            <p className="max-w-md text-center text-black md:text-right dark:text-white">
              ¡Hola! Soy un desarrollador web con experiencia en frontend,
              backend y desarrollo móvil. Me apasiona crear soluciones
              tecnológicas innovadoras y eficientes para mejorar la experiencia
              del usuario. Mi enfoque es siempre centrado en el usuario y en la
              calidad del código. Si buscas un desarrollador web confiable,
              creativo y orientado a resultados, estás en el lugar correcto.
              ¡Explora mi portafolio y ponte en contacto conmigo para hablar
              sobre tus proyectos!
            </p>

            <Button
              text="Leer más"
              suffixIcon={<AiOutlineArrowRight size={24} />}
            />
          </div>
        </RevealWrapper>
      </div>
    </Section>
  );
}

// bg-cyan-200
