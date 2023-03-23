import Image from "next/image";
import Link from "next/link";
import { Proyect } from "@/data/proyects";

interface Props {
  proyect: Proyect;
}
export default function ProyectCard2({ proyect }: Props) {
  return (
    <div key={proyect.id} className="flex flex-col overflow-hidden group">
      {/* Imagen del proyecto */}
      <Link href={`/proyects/${proyect.id}`}>
        <div className="relative z-0 overflow-hidden">
          <Image
            src={proyect.image!}
            alt={proyect.title}
            className="relative w-full transition-transform duration-300 cursor-pointer z-[-1] group-hover:scale-110"
            width={800}
            height={500}
          />
          {/* Textos del proyecto */}
          <div className="absolute bottom-0 flex flex-col-reverse w-full h-full p-4 py-2 gradient">
            <h3 className="text-2xl font-bold text-white">{proyect.title}</h3>
            <h4 className="text-gray-300 subtitle">{proyect.subtitle}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
