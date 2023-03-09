import { Layout } from '@/components/layouts';
import { AboutMe, Contact, Hero, Proyects } from '@/components/sections/';

export default function Home() {
    return (
        <Layout title="AlvaroHJ">
            <Hero />
            <AboutMe />
            <Proyects />
            <Contact />
        </Layout>
    );
}
