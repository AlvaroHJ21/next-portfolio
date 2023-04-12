import { GetStaticProps } from "next";

import { Layout } from "@/components/layouts";
import {
  About,
  Contact,
  Footer,
  Formation,
  Hero,
  Proyects,
  Skills,
} from "@/components/sections";
import { Project } from "@/interfaces/Project";
import { Category } from "@/interfaces/Category";
import projectProvider from "@/providers/projectProvider";
import categoryProvider from "@/providers/categoryProvider";

interface Props {
  projects: Project[];
  categories: Category[];
}

export default function Index({ projects, categories }: Props) {
  return (
    <Layout title="AlvaroHJ">
      <Hero />
      <About />
      <Skills />
      <Proyects projects={projects} categories={categories} />
      <Formation />
      <Contact />
      <Footer />
    </Layout>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const categories = await categoryProvider.getCategories();
  const projects = await projectProvider.getProjects();

  return {
    props: {
      categories: [{
        id: 0,
        name: "Todos"
      },...categories],
      projects,
    },
  };
};
