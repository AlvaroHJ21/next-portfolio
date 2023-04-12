import Link from "next/link";
import { Project } from "../../../interfaces/Project";

interface Props {
  project: Project;
}

export default function ProyectCard3({ project }: Props) {
  const { id, name, cover, categories, tecnologies } = project;

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 group dark:bg-opacity-25 dark:bg-black dark:border-[1px] dark:border-gray-600 rounded-md">
      {/* Imagen */}
      <Link href={`/proyects/${project.id}`} className="overflow-hidden">
        <img
          className="transition-transform duration-300 cursor-pointer group-hover:scale-110"
          src={cover.original}
          alt={`Proyecto ${name}`}
        />
      </Link>
      {/* Tecnologies */}

      <div className="flex flex-wrap gap-1">
        {tecnologies.map((tec) => (
          <div
            key={tec.id}
            className="px-4 py-1 text-white rounded-full bg-main"
          >
            <p className="text-sm">{tec.name}</p>
          </div>
        ))}
      </div>
      {/* Texts */}
      <div>
        <h3 className="text-20">{name}</h3>
        <p className="dark:text-gray-300">{categories[0].name}</p>
      </div>
    </div>
  );
}
