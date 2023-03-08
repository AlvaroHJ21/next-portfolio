import Section from '@/components/layouts/Section';
import styles from './AboutMe.module.css';
import { RevealWrapper } from 'next-reveal';

export default function AboutMe() {
    return (
        <Section id="about">
            <div className={styles.content}>
                <RevealWrapper className={styles.image} origin='bottom' reset>
                    <img src="/img/perfil.png" alt="perfil" />
                </RevealWrapper>
                <RevealWrapper origin='right' delay={200} reset>
                    <h2 className={styles.title}>Sobre <span>mí</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit
                        accusamus eos porro veniam saepe cumque autem aperiam laboriosam nostrum
                        labore consectetur deserunt molestiae voluptate rem corporis tempore,
                        dignissimos omnis?
                    </p>
                </RevealWrapper>
            </div>
        </Section>
    );
}
