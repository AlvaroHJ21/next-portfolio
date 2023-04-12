import Image from "next/image";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";

import projectProvider from "@/providers/projectProvider";
import { Project } from "@/interfaces/Project";
import { Layout } from "@/components/layouts";
import { MdClose } from "react-icons/md";
import { useState } from "react";

interface Props {
  project: Project;
}

export default function ProyectDetails({ project }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout title={`${project.name} - AlvaroHJ`}>
      <div className="bg-gray-50 dark:bg-background-light">
        <div className="fixed top-0 w-full">
          <Image
            className="w-full h-[50vh] object-cover"
            src={project.cover.original!}
            alt={`Imagen del proyecto ${project.name}`}
            width={800}
            height={480}
            sizes="100vw"
            priority
          />
          <div className="absolute top-0 w-full h-full bg-gray-400 dark:bg-black opacity-40"></div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 max-w-6xl w-[90%] m-auto mt-64 p-6 sm:p-10 bg-white dark:bg-background z-10 rounded-md shadow-lg">
          <div className="space-y-8 md:flex-[2]">
            {/* Textos */}
            <div className="">
              <h1 className="font-bold text-32">{project.name}</h1>
              <h3 className="mb-8 text-gray-400">
                {project.categories[0].name}
              </h3>

              <p className="leading-8">{project.description}</p>
            </div>
            {/* Imagen */}
            <Image
              src={project.cover?.large!}
              alt={`Imagen del proyecto ${project.name}`}
              width={800}
              height={480}
              sizes="100vw"
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* Tecnologias */}
          <div className="md:flex-1">
            <h3 className="mb-8 font-bold">Tecnologías</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {project.tecnologies.map((tecnology, index) => (
                <div key={index}>
                  <Image
                    src={tecnology.img?.original!}
                    alt={`Logo de ${tecnology.name}`}
                    width={80}
                    height={80}
                    className="w-[100px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 z-50 w-full h-screen bg-black bg-opacity-60`}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="absolute flex justify-center pt-2 top-2 right-2 left-2">
            <div className="p-2 border-2 rounded-full cursor-pointer " onClick={() => setIsOpen(false)}>
            <MdClose size={16} />
          </div>
          </div>
          
          <img className="object-cover m-auto shadow-lg h-5/6 " src={project.cover.original} alt="" />
        </div>
      </div>
    </Layout>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const projects = await projectProvider.getProjects();

  const paths = projects.map((proyect, index) => ({
    params: { id: `${proyect.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await projectProvider.getProjects();

  const { id } = params as { id: string };

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
  };
};
