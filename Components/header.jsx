import { useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import logo from '../public/logo.webp';

export default function Header({ setPage }) { 
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image
                    src={logo}
                    alt="Logo React"
                    width={80}
                />
                <div className={styles.burger} onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
                <nav className={`${styles.mainNav} ${menuOpen ? styles.active : ''}`}> 
                    <ul>
                        <li><button onClick={() => { setPage('accueil'); toggleMenu(); }}>Accueil</button></li>
                        <li><button onClick={() => { setPage('apropos'); toggleMenu(); }}>A propos</button></li>
                        <li><button onClick={() => { setPage('contact'); toggleMenu(); }}>Contact</button></li>
                        <li><button onClick={() => { setPage('inscription'); toggleMenu(); }}>inscription</button></li>
                        <li><button onClick={() => { setPage('Connexion'); toggleMenu(); }}>Connexion</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
