import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { RevealWrapper } from "next-reveal";

import Input from "../ui/Input";
import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";
import Section from "../layouts/Section";
import { FormEvent, useState, useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const buttonMailto = useRef<HTMLAnchorElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, message });
    if (!buttonMailto.current) return;
    buttonMailto.current.setAttribute(
      "href",
      `mailto:alvarohuaysara@gmail.com?subject=Nombre ${name}, correo ${email}&body=${message}`
    );
    buttonMailto.current.click();
  }

  return (
    <section id="contact">
      <div className="flex flex-col justify-center py-20">
        <div>
          <h2 className="mb-8 font-black text-center uppercase text-main text-32 dark:text-white">
            Contáctame
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:justify-center md:flex-row md:gap-12">
          {/* Texts */}
          <div
            className="space-y-4 md:flex md:flex-col md:justify-between md:max-w-sm"
          >
            <p className="text-center text-black md:text-left dark:text-white">
              No dudes en contactarme si necesitas un desarrollador con
              experiencia para llevar tu proyecto digital al siguiente nivel.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:alvarohuaysara@gmail.com"
                className="flex gap-2 text-black dark:text-white"
              >
                <HiOutlineMail size={24} className="text-main" />
                alvarohuaysara@gmail.com
              </a>
              <a
                href="tel:+51926513695"
                className="flex gap-2 text-black dark:text-white"
              >
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
          </div>

          {/* Form */}
          <div className="w-full md:max-w-lg">
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-4"
            >
              <div className="">
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Nombre
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Mensaje
                </label>
                <Input
                  type="text"
                  placeholder="Me gustaría consultarte..."
                  multiline
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button type="submit" text="Enviar" />
            </form>
            <a ref={buttonMailto} href="#" className="hidden"></a>
          </div>
        </div>
      </div>
    </section>
  );
}
