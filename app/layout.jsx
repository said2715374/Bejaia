'use client'
import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/header";
import Footer from "../Components/footer";
import styles from './layout.module.css';
import Head from 'next/head';
import Cookies from 'js-cookie';
import Accueil from "../Components/Accueil";
import Apropos from "@/Components/Apropos";
import Contact from "@/Components/Contact";
import Inscription from "@/Components/inscription";
import Connexion from "@/Components/Connexion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  // États pour le thème, la langue et la page active
  const [language, setLanguage] = useState(() => {
    // Lire la langue depuis les cookies ou définir par défaut
    const storedLanguage = Cookies.get('language');
    return storedLanguage || 'fr';
});
const [theme, setTheme] = useState(() => {
    const storedTheme = Cookies.get('theme');
    return storedTheme || 'light'; // Si le cookie n'existe pas, le thème par défaut est 'light'
});
  const [page, setPage] = useState('accueil'); // Page par défaut

  // Effet pour charger le thème et la langue depuis les cookies au chargement de la page
  useEffect(() => {
    const storedTheme = Cookies.get('theme');
    const storedLanguage = Cookies.get('language');

    // Si les cookies existent, charger les valeurs
    if (storedTheme) {
      setTheme(storedTheme);
    }
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Effet pour sauvegarder le thème dans les cookies lorsqu'il change
  useEffect(() => {
    Cookies.set('theme', theme, { expires: 365 }); // Cookie valide pendant 1 an
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // Effet pour sauvegarder la langue dans les cookies lorsqu'elle change
  useEffect(() => {
    Cookies.set('language', language, { expires: 365 }); // Cookie valide pendant 1 an
  }, [language]);

  // Fonction pour changer le thème
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Fonction pour changer la langue
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'fr' ? 'en' : 'fr'));
  };

  // Contenu de la page en fonction de la page active
  let contenu;
  if (page === 'accueil') {
    contenu = <Accueil />;
  } else if (page === 'apropos') {
    contenu = <Apropos />;
  } else if (page === 'contact') {
    contenu = <Contact />;
  } else if (page === 'inscription') {
    contenu = <Inscription />;
  } else if (page === 'connexion') {
    contenu = <Connexion />;
  }

  // Retourner le layout avec les bonnes métadonnées et le contenu dynamique
  return (
    <html lang="en">
      <Head>
        <title>Votre titre ici</title>
        <meta name="description" content="Votre description ici" />
        {/* Autres métadonnées si nécessaire */}
      </Head>
      <body className={inter.className + ' ' + styles.body}>
        <Header setPage={setPage} />
        <main>
          <div className={styles.main}>
            {contenu}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
