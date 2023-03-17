import { Layout } from "@/components/layouts";
import { AboutMe, Contact, Home, Proyects, Skills } from "@/components/sections/";
import Footer from '@/components/sections/Footer';

export default function Index() {
  return (
    <Layout title="AlvaroHJ">
      <Home />
      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
      <Footer/>
    </Layout>
  );
}
