import Image from "next/image";
import Link from "next/link";
import { Proyect } from "@/data/proyects";

interface Props {
  proyect: Proyect;
}

export default function ProyectCard({ proyect }: Props) {
  return (
    <div
      key={proyect.id}
      className="flex flex-col-reverse gap-4 md:gap-8 md:flex-row md:items-center"
    >
      <div className="block h-1 m-auto w-36 bg-main md:hidden"></div>
      {/* Imagen del proyecto */}
      <Link href={`/proyects/${proyect.id}`} className="flex-1 overflow-hidden">
        <Image
          src={proyect.image!}
          alt={proyect.title}
          className="w-full transition-transform duration-300 cursor-pointer hover:scale-110"
          width={800}
          height={500}
        />
      </Link>

      {/* Textos del proyecto */}
      <div className="flex flex-col flex-1 gap-4 md:justify-center">
        <h3 className="font-bold text-gray-600 text-20 dark:text-white">
          {proyect.title}
        </h3>
        <h4 className="text-gray-500 dark:text-gray-300 subtitle">
          {proyect.subtitle}
        </h4>
        <p className="text-black dark:text-white">{proyect.description}</p>
        <div className="hidden h-1 m-auto w-36 bg-main md:block"></div>
      </div>
    </div>
  );
}
