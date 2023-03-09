import Section from '@/components/layouts/Section';
import styles from './AboutMe.module.css';
import { RevealWrapper } from 'next-reveal';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function AboutMe() {
    return (
        <Section id="about" backgroundColor="var(--foreground-opacity)">
            <div className={styles.content}>
                <RevealWrapper className={styles.image} origin="bottom" reset>
                    <img src="/img/perfil.png" alt="perfil" />
                </RevealWrapper>
                <RevealWrapper delay={200} reset>
                    <h2 className={styles.title}>
                        Sobre <span>mí</span>
                    </h2>
                    <p>
                        ¡Hola! Soy un desarrollador web con experiencia en frontend, backend y
                        desarrollo móvil. Me apasiona crear soluciones tecnológicas innovadoras y
                        eficientes para mejorar la experiencia del usuario. Mi enfoque es siempre
                        centrado en el usuario y en la calidad del código. Si buscas un
                        desarrollador web confiable, creativo y orientado a resultados, estás en el
                        lugar correcto. ¡Explora mi portafolio y ponte en contacto conmigo para
                        hablar sobre tus proyectos!
                    </p>
                    <div className={styles.ctaContainer}>
                        <a
                            href="https://astro-cv-nine.vercel.app/"
                            target="_blank"
                            className={styles.cta}
                        >
                            <span>Leer más </span>
                            <AiOutlineArrowRight />
                        </a>
                    </div>
                </RevealWrapper>
            </div>
        </Section>
    );
}
