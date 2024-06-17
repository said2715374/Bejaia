'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/header";
import Footer from "../Components/footer";
import styles from './layout.module.css';

import { useState } from 'react';
import Accueil from "../Components/Accueil";
import Apropos from "@/Components/Apropos";
import Contact from "@/Components/Contact";
import Inscription from "@/Components/inscription";
import Connexion from "@/Components/Connexion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  const [page, setPage] = useState('accueil');

  let contenu;

  if (page === 'accueil') {
    contenu = <Accueil />;
  } else if (page === 'apropos') {
    contenu = <Apropos />;
  } else if (page === 'contact') {
    contenu = <Contact />;
  } else if (page === 'inscription') {
    contenu = <Inscription/>;
  } else if (page === 'connexion') {
    contenu = <Connexion/>;
  }

  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <Header setPage={setPage} />
        <main >
          <div className={styles.main}>
          {page === 'accueil' && <Accueil />}
          {page === 'apropos' && <Apropos />}
          {page === 'contact' && <Contact />}
          {page === 'inscription' && <Inscription/>}
          {page === 'Connexion' && <Connexion/>}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
