import Image from "next/image";
import { Layout } from "@/components/layouts";
import { Proyect, proyects } from "@/data/proyects";

interface Props {
  proyect: Proyect;
}

export default function ProyectDetails({ proyect }: Props) {
  return (
    <Layout title={`${proyect.title} - AlvaroHJ`}>
      <div className="bg-gray-50 dark:bg-background-light">

        <div className="fixed top-0 w-full">
          <Image
            className="w-full h-[50vh] object-cover"
            src={proyect.image!}
            alt={`Imagen del proyecto ${proyect.title}`}
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
              <h1 className="font-bold text-32">{proyect.title}</h1>
              <h3 className="mb-8 text-gray-400">{proyect.subtitle}</h3>

              <p className="leading-8">{proyect.description}</p>
              <p className="leading-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae harum consectetur consequatur, amet deserunt magni
                iste ipsum accusantium corrupti? Quis labore nemo nostrum vero
                dicta animi ipsum impedit obcaecati consectetur.
              </p>
              <p className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eum necessitatibus molestiae ipsa, consequuntur id sint,
                expedita dicta, consectetur quas a perspiciatis alias animi
                maxime excepturi at perferendis velit ea.
              </p>
            </div>
            {/* Imagen */}
            <Image
              src={proyect.image!}
              alt={`Imagen del proyecto ${proyect.title}`}
              width={800}
              height={480}
              sizes="100vw"
            />
          </div>

          {/* Tecnologias */}
          <div className="md:flex-1">
            <h3 className="mb-8 font-bold">Tecnologías</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {proyect.tecnolgoies?.map((tecnology, index) => (
                <div key={index}>
                  <Image
                    src={tecnology.img}
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
    </Layout>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } =

  const paths = proyects.map((proyect, index) => ({
    params: { id: `${proyect.id}` },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { data } =  // your fetch function here

  const { id } = params as { id: string };

  const proyect = proyects.find((p) => p.id === Number(id));

  if (!proyect) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      proyect,
    },
  };
};
