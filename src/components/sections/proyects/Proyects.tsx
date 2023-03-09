import Card from '@/components/ui/card/Card';
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
                <RevealWrapper origin="bottom" delay={100} reset className={styles.buttons}>
                    <button>Frontend</button>
                    <button className={styles.active}>Full Stack</button>
                    <button>Móvil</button>
                </RevealWrapper>
                <div className={styles.cards}>
                    <RevealWrapper origin="bottom" reset>
                        <Card type={1}/>
                    </RevealWrapper>
                </div>
            </div>
        </Section>
    );
}
