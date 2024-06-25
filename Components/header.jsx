import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import logo from '../public/logo.webp';
import lightTheme from '../Components/light-theme.css';
import darkTheme from '../Components/dark-theme.css';

export default function Header({ setPage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('fr'); // État pour la langue
    const [theme, setTheme] = useState('light'); // État pour le thème

    useEffect(() => {
        // Applique le thème en ajoutant une classe au body
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'fr' ? 'en' : 'fr'));
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const labels = {
        fr: {
            accueil: 'Accueil',
            apropos: 'À propos',
            contact: 'Contact',
            inscription: 'Inscription',
            connexion: 'Connexion',
        },
        en: {
            accueil: 'Home',
            apropos: 'About',
            contact: 'Contact',
            inscription: 'Sign Up',
            connexion: 'Login',
        },
    };

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
                    {language === 'fr' ? 'English' : 'Français'}
                </button>
                <button 
                    className={styles.themeToggle} 
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? '🌙 Sombre' : '☀️ Clair'}
                </button>
                <nav className={`${styles.mainNav} ${menuOpen ? styles.active : ''}`}> 
                    <ul>
                        <li><button onClick={() => { setPage('accueil'); toggleMenu(); }}>{labels[language].accueil}</button></li>
                        <li><button onClick={() => { setPage('apropos'); toggleMenu(); }}>{labels[language].apropos}</button></li>
                        <li><button onClick={() => { setPage('contact'); toggleMenu(); }}>{labels[language].contact}</button></li>
                        <li><button onClick={() => { setPage('inscription'); toggleMenu(); }}>{labels[language].inscription}</button></li>
                        <li><button onClick={() => { setPage('connexion'); toggleMenu(); }}>{labels[language].connexion}</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
