import { Layout } from '@/components/layouts'
import AboutMe from '@/components/ui/about-me/AboutMe';
import Proyects from '@/components/ui/proyects/Proyects';
import Contact from '@/components/ui/contact/Contact';
import Hero from '@/components/ui/hero/Hero';

export default function Home() {
  return (
      <Layout title="AlvaroHJ">
          <Hero />
          <AboutMe/>
          <Proyects/>
          <Contact/>
      </Layout>
  );
}
