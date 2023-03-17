import { useEffect, useRef } from "react";

import {BsDownload} from 'react-icons/bs'

import Typed from "typed.js";
import Section from "@/components/layouts/Section";
import Button from "@/components/ui/Button";
import ButtonIcons from "../ui/ButtonIcons";

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
          <p className="font-regular text-32">Hola, soy</p>
          <h1 className="font-black font-raleway text-52 text-main">
            Alvaro Huaysara
          </h1>
          <h2 className="font-bold font-raleway text-32">
            Desarrollador <span className="text"></span>
          </h2>
          <p className="font-regular max-w-[620px] w-[90%] text-16">
            Apasionado por crear soluciones tecnológicas innovadoras y
            eficientes para mejorar la experiencia del usuario. ¡Explora mi
            portafolio y contáctame para hablar sobre tus proyectos!
          </p>
        </div>

        {/* Icons */}

        <ButtonIcons />

        {/* End Icons */}

        <div className="flex gap-4">
          <Button text="Ver proyectos" />
          <Button
            text="Descargar mi CV"
            variant="outline"
            prefixIcon={<BsDownload size={24} />}
          />
        </div>
      </div>
      {/* <div className=''>
                <div className=''>
                    <div className=''>
                        <h3>Hola, soy</h3>
                        <h1>Alvaro Huaysara</h1>
                        <h3>
                            Y soy Desarrollador Frontend
                        </h3>
                        <p>
                            Apasionado por crear soluciones tecnológicas innovadoras y eficientes
                            para mejorar la experiencia del usuario. ¡Explora mi portafolio y contáctame para hablar
                            sobre tus proyectos!
                        </p>
                    </div>

                    <div className=''>
                        <a
                            href="https://twitter.com/AlvaroHJ21"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillTwitterCircle size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alvaro-huaysara-jauregui-397537223/"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillLinkedin size={32} />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCDZdX0MdyFi4EgtOiQ_knWQ"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillYoutube size={32} />
                        </a>
                        <a
                            href="https://github.com/AlvaroHJ21"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillGithub size={32} />
                        </a>
                    </div>
                    
                    <div >
                        <a
                            href="https://astro-cv-nine.vercel.app/"
                            target="_blank"
                            className=''
                        >
                            Échale un vistazo a mi CV
                        </a>
                    </div>
                </div>
            </div> */}
    </Section>
  );
}
