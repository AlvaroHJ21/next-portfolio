import { Layout } from "@/components/layouts";
import { Proyect, proyects } from "@/data/proyects";

interface Props {
  proyect: Proyect;
}

export default function ProyectDetails({ proyect }: Props) {
  return (
    <Layout title={`${proyect.title} - AlvaroHJ`}>
      <div className="relative">
        <Image
          className="w-full h-[380px] object-cover"
          src={proyect.image!}
          alt={`Imagen del proyecto ${proyect.title}`}
          width={800}
          height={480}
          sizes="100vw"
          priority
        />
        <div className="absolute w-full h-full bg-black opacity-40 top-0"></div>
        <div className="absolute bottom-0 w-full">
          <div className="max-w-6xl w-[90%] m-auto pb-6">
            <h1 className="text-32 font-bold">{proyect.title}</h1>
          </div>
        </div>

      </div>
      <div className="max-w-6xl w-[90%] m-auto pb-12 py-12">
        <h3 className="text-gray-400 mb-8">{proyect.subtitle}</h3>
        <p className="leading-8">{proyect.description}</p>
        <p className="leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          harum consectetur consequatur, amet deserunt magni iste ipsum
          accusantium corrupti? Quis labore nemo nostrum vero dicta animi ipsum
          impedit obcaecati consectetur.
        </p>
        <p className="leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eum
          necessitatibus molestiae ipsa, consequuntur id sint, expedita dicta,
          consectetur quas a perspiciatis alias animi maxime excepturi at
          perferendis velit ea.
        </p>
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
import Image from "next/image";

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
