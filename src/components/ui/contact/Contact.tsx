import Section from '@/components/layouts/Section';
import styles from './Contact.module.css';
import { RevealWrapper } from 'next-reveal';

export default function Contact() {
    return (
        <Section id="contact">
            <div className={styles.content}>
                <RevealWrapper reset>
                    <h2 className={styles.title}>Contáctame</h2>
                </RevealWrapper>
                <div>
                    <form action="" className={styles.form}>
                        <RevealWrapper delay={100} origin='bottom' className={styles.row} reset>
                            <input type="text" name="" id="" placeholder="Nombre completo" />
                            <input type="text" name="" id="" placeholder="Email" />
                        </RevealWrapper>
                        <RevealWrapper delay={200} origin='bottom' className={styles.row} reset>
                            <input type="text" name="" id="" placeholder="Número de teléfono" />
                            <input type="text" name="" id="" placeholder="Asunto del email" />
                        </RevealWrapper>
                        <RevealWrapper delay={300} origin='bottom' reset>
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Tu mensaje"
                            ></textarea>
                        </RevealWrapper>
                    </form>
                </div>
            </div>
        </Section>
    );
}
