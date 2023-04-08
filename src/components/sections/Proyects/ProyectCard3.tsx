import Link from "next/link";
import React from "react";
import { Proyect } from "../../../data/proyects";

interface Props {
  proyect: Proyect;
}

export default function ProyectCard3({ proyect }: Props) {
  const {
    id,
    title,
    image2,
    image,
    subtitle,
    tecnologies,
  } = proyect;
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 group dark:bg-opacity-25 dark:bg-black dark:border-[1px] dark:border-gray-600 rounded-md">
      {/* Imagen */}
      <Link href={`/proyects/${proyect.id}`} className="overflow-hidden">
        <img className="transition-transform duration-300 cursor-pointer group-hover:scale-110" src={image2} alt={`Proyecto ${title}`} />
      </Link>
      {/* Tecnologies */}

      <div className="flex flex-wrap gap-1">
      {
        tecnologies?.map((tec) => (
            <div key={tec.name} className="px-4 py-1 text-white rounded-full bg-main">
                <p className="text-sm">{tec.name}</p>
            </div>
        ))
      }
      </div>
      {/* Texts */}
      <div>
        <h3 className="text-20">{title}</h3>
        <p className="dark:text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
}
