import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import Section from "../layouts/Section";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col justify-center min-h-screen pt-16">
        <h2 className="mb-8 font-black text-center text-white uppercase text-32">
          Contáctame
        </h2>

        <div className="flex flex-col gap-12 md:flex-row">
          {/* Texts */}
          <div className="space-y-4 md:flex md:flex-1 md:flex-col md:justify-between">
            <p className="text-center md:text-left">
              No dudes en contactarme si necesitas un desarrollador con
              experiencia para llevar tu proyecto digital al siguiente nivel.
            </p>
            <div className="flex flex-col gap-4">
              <p className="flex gap-2">
                <HiOutlineMail size={24} className="text-main" />
                alvarohuaysara@gmail.com
              </p>
              <p className="flex gap-2">
                <AiOutlineWhatsApp size={24} className="text-main" />
                +51 926513695
              </p>
              <Button text="Descarga mi CV" prefixIcon={<BsDownload />} />
            </div>
          </div>

          {/* Form */}
          <div className="md:flex-1">
            <form action="" className="flex flex-col gap-4">
              <Input placeholder="Nombre" />
              <Input placeholder="Email" />
              <Input placeholder="Mensaje" multiline />
              <Button text="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
