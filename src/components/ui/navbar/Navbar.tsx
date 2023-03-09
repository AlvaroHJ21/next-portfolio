import { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClickMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {' '}
            <header className={styles.header} style={{
                backgroundColor: 'var(--foreground)'
            }}>
                <div className={styles.container}>
                    <a href="/" className={styles.logo}>
                        Alvaro<span>HJ</span>
                    </a>
                    {isOpen ? (
                        <AiOutlineClose
                            onClick={handleClickMenu}
                            className={styles.menuIcon}
                            size={24}
                        />
                    ) : (
                        <AiOutlineMenu
                            onClick={handleClickMenu}
                            className={styles.menuIcon}
                            size={24}
                        />
                    )}
                    <nav className={styles.navbar}>
                        <a className={styles.active} href="#home">
                            Home
                        </a>
                        <a href="#about">Sobre mí</a>
                        <a href="#proyects">Proyectos</a>
                        <a href="#contact">Contacto</a>
                    </nav>
                </div>
            </header>
            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <a className={styles.active} href="#home">
                    Home
                </a>
                <a href="#about">Sobre mí</a>
                <a href="#proyects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </div>
        </>
    );
}
