import { Carousel } from 'react-responsive-carousel';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './Card.module.css';

const images = [
    '/img/ecommerce-book-1.png',
    '/img/ecommerce-book-2.png',
    '/img/ecommerce-book-3.png',
    '/img/ecommerce-book-4.png',
    '/img/ecommerce-book-5.png',
    '/img/ecommerce-book-6.png',
];

export default function Card({ type }: { type: number }) {
    return (
        <div className={type === 1 ? styles.card : styles.card2}>
            <div className={styles.texts}>
                <h3>Ecomerce de Libros</h3>
                <p className={styles.description}>
                    La aplicación permite a los usuarios buscar, explorar y comprar libros de
                    diferentes categorías. Se implementó una interfaz de usuario intuitiva y un
                    proceso de compra seguro y fácil de usar.
                </p>
                <h4>Tecnologías Frontend</h4>
                <div className={styles.tecnologies}>
                    <div className={styles.tecnology}>
                        <FaReact />
                    </div>
                    <div className={styles.tecnology}>
                        <SiTailwindcss />
                    </div>
                </div>

                <h4>Tecnologías Backend</h4>
                <div className={styles.tecnologies}>
                    <div className={styles.tecnology}>
                        <FaNodeJs />
                    </div>
                    <div className={styles.tecnology}>
                        <SiExpress />
                    </div>
                    <div className={styles.tecnology}>
                        <SiMongodb />
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <Carousel emulateTouch autoPlay showStatus={false} showIndicators={false}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
