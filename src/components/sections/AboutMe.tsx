import Section from "@/components/layouts/Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@/components/ui/Button";

export default function AboutMe() {
  return (
    <Section id="about-us">
      <div className="flex flex-col items-center justify-center h-screen gap-4 md:flex-row">
        
        <div className="flex justify-center md:flex-1">
          <div className="relative flex justify-center w-fit">
            <div className="z-10 absolute top-2 left-2 w-full h-full rounded-full rotate-[30deg] bg-main"></div>

            <div className="relative z-20 max-w-[220px] md:max-w-[320px]">
              <img
                className="object-cover max-w-full"
                src="/img/perfil-real.png"
                alt="perfil"
              />
            </div>
          </div>
        </div>
        
        <div className="">
          <div className="flex flex-col items-center gap-4 md:items-end">
            <h2 className="font-black uppercase text-32">
              Sobre <span className="text-main">mí</span>
            </h2>

            <p className="max-w-md text-center md:text-right">
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
        </div>
      </div>
    </Section>
  );
}

// bg-cyan-200
