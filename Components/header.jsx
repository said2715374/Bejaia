import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import logo from '../public/logo.webp';

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
    
    // Utilisation d'une valeur fixe pour l'initialisation de 'theme'
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Récupération du thème depuis les cookies au montage du composant
        const storedTheme = Cookies.get('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        // Mise à jour du cookie de thème lorsque 'theme' change
        Cookies.set('theme', theme, { expires: 365 });
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'fr' ? 'en' : 'fr'));
    };

    const toggleTheme = () => {
        // Inversion du thème actuel
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Sélection des labels de langue en fonction de 'language'
    const labels = language === 'fr' ? TEXT_FR : TEXT_EN;

    // Texte du bouton de thème basé sur 'theme'
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
