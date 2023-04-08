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

export default function Index() {
  return (
    <Layout title="AlvaroHJ">
      <Hero />
      <About />
      <Skills />
      <Proyects />
      <Formation/>
      <Contact />
      <Footer />
    </Layout>
  );
}
