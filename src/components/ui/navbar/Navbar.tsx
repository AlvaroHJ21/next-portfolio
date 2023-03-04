import { AiOutlineMenu } from 'react-icons/ai';
import styles from './Navbar.module.css';
export default function Navbar() {

    function handleClickMenu () {
        console.log('a');
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="" className={styles.logo}>
                    Alvaro<span>HJ</span>
                </a>
                <AiOutlineMenu onClick={handleClickMenu} className={styles.menuIcon} size={24} />
                <nav className={styles.navbar}>
                    <a className={styles.active} href="">
                        Home
                    </a>
                    <a href="">Sobre mí</a>
                    <a href="">Proyectos</a>
                    <a href="">Contacto</a>
                </nav>
            </div>
        </header>
    );
}
