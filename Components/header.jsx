import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import logo from '../public/logo.webp';

// Définition des textes constants pour les boutons
const TEXT_FR = {
    toggleTheme: 'Thème',
    toggleLanguage: 'Français',
    accueil: 'Accueil',
    apropos: 'À propos',
    contact: 'Contact',
    inscription: 'Inscription',
    connexion: 'Connexion',
};

const TEXT_EN = {
    toggleTheme: 'Theme',
    toggleLanguage: 'English',
    accueil: 'Home',
    apropos: 'About',
    contact: 'Contact',
    inscription: 'Sign Up',
    connexion: 'Login',
};

export default function Header({ setPage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState(() => {
        const storedLanguage = Cookies.get('language');
        return storedLanguage || 'fr';
    });
    const [theme, setTheme] = useState(() => {
        const storedTheme = Cookies.get('theme');
        return storedTheme || 'light';
    });

    

    useEffect(() => {
        Cookies.set('theme', theme, { expires: 365 });
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    useEffect(() => {
        Cookies.set('language', language, { expires: 365 });
    }, [language]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'fr' ? 'en' : 'fr'));
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Utilisation des constantes pour le texte des boutons
    const labels = language === 'fr' ? TEXT_FR : TEXT_EN;
    const themeToggleText = theme === 'light' ? '🌙 Sombre' : '☀️ Clair';

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={80}
                />
                <div className={styles.burger} onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
                <button
                    className={`${styles.languageToggle} ${language === 'en' ? styles.active : ''}`}
                    onClick={toggleLanguage}
                >
                    {labels.toggleLanguage}
                </button>

                {/* Utilisation de la constante pour afficher le texte du bouton de thème */}
                <button
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                >
                    {themeToggleText}
                </button>
                <nav className={`${styles.mainNav} ${menuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><button onClick={() => { setPage('accueil'); toggleMenu(); }}>{labels.accueil}</button></li>
                        <li><button onClick={() => { setPage('apropos'); toggleMenu(); }}>{labels.apropos}</button></li>
                        <li><button onClick={() => { setPage('contact'); toggleMenu(); }}>{labels.contact}</button></li>
                        <li><button onClick={() => { setPage('inscription'); toggleMenu(); }}>{labels.inscription}</button></li>
                        <li><button onClick={() => { setPage('connexion'); toggleMenu(); }}>{labels.connexion}</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
