import Section from "@/components/layouts/Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@/components/ui/Button";

export default function AboutMe() {
  return (
    <Section id="about-us">
      <div className="flex flex-col justify-center items-center h-screen gap-4 min-[1000px]:flex-row">
        
        <div className="min-[1000px]:flex-1 flex justify-center">
          <div className="relative flex justify-center w-fit">
            <div className="z-10 absolute top-2 left-2 w-full h-full rounded-full rotate-[30deg] bg-azul-verdoso"></div>

            <div className="relative z-20 max-w-[220px] min-[1000px]:max-w-[320px]">
              <img
                className="object-cover max-w-full"
                src="/img/perfil-real.png"
                alt="perfil"
              />
            </div>
          </div>
        </div>
        
        <div className="">
          <div className="flex flex-col items-center gap-4 min-[1000px]:items-end">
            <h2 className="font-black uppercase text-32">
              Sobre <span className="text-azul-verdoso">mí</span>
            </h2>

            <p className="text-center min-[1000px]:text-right max-w-lg">
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
