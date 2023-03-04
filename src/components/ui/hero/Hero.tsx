import { useEffect, useRef } from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import Typed from 'typed.js';
import { RevealWrapper } from 'next-reveal';
import styles from './Hero.module.css';

export default function Hero() {
    const typed = useRef<Typed>();

    useEffect(() => {
        if (document.querySelector('.text')) {
            typed.current = new Typed('.text', {
                strings: ['Desarrollador Frontend', 'Desarrollador Backend', 'Desarrollador Móvil'],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true,
            });
        }
        return () => {
            typed.current?.destroy();
        };
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <RevealWrapper className={styles.texts}>
                        <h3>Hola, soy</h3>
                        <h1>Alvaro Huaysara</h1>
                        <h3>
                            Y soy <span className="text">Desarrollador Frontend</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur it amet consectetur it amet
                            consectetur adipisicing elit. Quia sapiente in nam consectetur!
                        </p>
                    </RevealWrapper>

                    <RevealWrapper className={styles.icons} origin="bottom">
                        <a
                            href="https://twitter.com/AlvaroHJ21"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillTwitterCircle size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alvaro-huaysara-jauregui-397537223/"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillLinkedin size={32} />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCDZdX0MdyFi4EgtOiQ_knWQ"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillYoutube size={32} />
                        </a>
                        <a
                            href="https://github.com/AlvaroHJ21"
                            className="btn-icon"
                            target={'_blank'}
                        >
                            <AiFillGithub size={32} />
                        </a>
                    </RevealWrapper>
                    <RevealWrapper origin='bottom'>
                        <button className={styles.cta}>Échale un vistazo a mi CV</button>
                    </RevealWrapper>
                </div>
                <RevealWrapper className={styles.image} origin="rigth" delay={100} duration={1000}>
                    <img src="/img/perfil.png" alt="perfil" />
                </RevealWrapper>
            </div>
        </section>
    );
}
