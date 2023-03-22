import { Layout } from "@/components/layouts";
import {
  AboutMe,
  Contact,
  Footer,
  Home,
  Proyects,
  Skills,
} from "@/components/sections";

export default function Index() {
  return (
    <Layout title="AlvaroHJ">
      <Home />
      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </Layout>
  );
}
