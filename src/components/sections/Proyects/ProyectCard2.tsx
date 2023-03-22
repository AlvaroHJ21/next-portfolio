import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import { Proyect } from "@/data/proyects";

interface Props {
  proyect: Proyect;
}
export default function ProyectCard2({ proyect }: Props) {
  return (
    <RevealWrapper
      origin="bottom"
      key={proyect.id}
      className="flex flex-col overflow-hidden bg-white group dark:bg-background"
    >
      {/* Imagen del proyecto */}
      <Link
        href={`/proyects/${proyect.id}`}
        className="relative overflow-hidden "
      >
        <div className="gradient">
          <Image
            src={proyect.image!}
            alt={proyect.title}
            className="relative w-full transition-transform duration-300 cursor-pointer group-hover:scale-110 -z-10"
            width={800}
            height={500}
          />
        </div>

      {/* Textos del proyecto */}
        <div className="absolute bottom-0 p-4 py-2">
          <h3 className="text-2xl font-bold text-white">
            {proyect.title}
          </h3>
          <h4 className="text-gray-300 subtitle">
            {proyect.subtitle}
          </h4>
        </div>
      </Link>
    </RevealWrapper>
  );
}
