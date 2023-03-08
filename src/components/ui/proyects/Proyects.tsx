import { RevealWrapper } from 'next-reveal';
import Section from '../../layouts/Section';
import styles from './Proyects.module.css';

export default function Proyects() {
    return (
        <Section id="proyects">
            <div className={styles.content}>
                <RevealWrapper reset>
                    <h2 className={styles.title}>
                        Mis <span>Proyectos</span>
                    </h2>
                </RevealWrapper>
                <RevealWrapper origin='bottom' delay={100} className={styles.buttons} reset>
                    <button className={styles.active}>Frontend</button>
                    <button>Backend</button>
                    <button>Móvil</button>
                </RevealWrapper>
            </div>
        </Section>
    );
}
