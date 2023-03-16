import { Layout } from "@/components/layouts";
import { AboutMe, Contact, Home, Proyects, Skills } from "@/components/sections/";

export default function Index() {
  return (
    <Layout title="AlvaroHJ">
      <Home />
      <AboutMe />
      <Skills />
      <Proyects />
      {/* 
            <Proyects />
            <Contact /> */}
      {/* <Contact /> */}
    </Layout>
  );
}
