import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { RevealWrapper } from "next-reveal";

import Input from "../ui/Input";
import Button from "../ui/Button";
import LinkButton from '../ui/LinkButton';
import Section from "../layouts/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col justify-center min-h-screen pt-16">
        <RevealWrapper>

        <h2 className="mb-8 font-black text-center text-white uppercase text-32">
          Contáctame
        </h2>
        </RevealWrapper>

        <div className="flex flex-col gap-12 md:flex-row md:gap-24">
          {/* Texts */}
          <RevealWrapper reset className="space-y-4 md:flex md:flex-1 md:flex-col md:justify-between">
            <p className="text-center md:text-left">
              No dudes en contactarme si necesitas un desarrollador con
              experiencia para llevar tu proyecto digital al siguiente nivel.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:alvarohuaysara@gmail.com" className="flex gap-2">
                <HiOutlineMail size={24} className="text-main" />
                alvarohuaysara@gmail.com
              </a>
              <a href="tel:+51926513695" className="flex gap-2">
                <AiOutlineWhatsApp size={24} className="text-main" />
                +51 926513695
              </a>
              <div>
                <LinkButton
                  text="Descarga mi CV"
                  href="/pdf/CV-AlvaroHJ.pdf"
                  target="_blank"
                  download="CV-AlvaroHJ.pdf"
                  variant="outline"
                  prefixIcon={<BsDownload size={24} />}
                />
              </div>
            </div>
          </RevealWrapper>

          {/* Form */}
          <RevealWrapper reset origin="bottom" className="md:flex-1">
            <form action="" className="flex flex-col gap-4">
              <Input placeholder="Nombre" />
              <Input placeholder="Email" />
              <Input placeholder="Mensaje" multiline />
              <Button text="Enviar" />
            </form>
          </RevealWrapper>
        </div>
      </div>
    </Section>
  );
}
