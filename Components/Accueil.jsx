'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Titre from './Title';
import styles from './Accueil.module.css';
import BejaiaVue from '@/public/BejaiaVue.webp';
import capCarbon from '@/public/capCarbon.webp';
import gouraya from '@/public/gouraya.webp';

export const metadata = {
    title: 'Accueil | BEJAIA',
    description: 'Les résultats de recherche peuvent inclure des attributs "meta description" pour résumer de manière concise le contenu de la page. [En savoir plus sur la meta description](lien-vers-votre-ressource).',
    openGraph: {
        title: 'Accueil | BEJAIA',
        description: 'Les résultats de recherche peuvent inclure des attributs "meta description" pour résumer de manière concise le contenu de la page. [En savoir plus sur la meta description](lien-vers-votre-ressource).',
        url: 'http://localhost:3000',
        type: 'website',
        images: [
            {
                url: '/BejaiaVue.webp',
                width: 800,
                height: 600,
                alt: 'Vue aérienne de Bejaia',
            },
        ],
    },
};


export default function Accueil() {
    const [theme, setTheme] = useState('light'); // état du thème par défaut
    const [langue, setLangue] = useState('fr'); // état de la langue par défaut

    useEffect(() => {
        // Fonction pour récupérer les valeurs des cookies
        const getCookie = (name) => {
            const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
            return cookieValue ? cookieValue.pop() : '';
        };

        // Récupérer les valeurs des cookies pour le thème et la langue
        const savedTheme = getCookie('theme');
        const savedLangue = getCookie('langue');

        // Mettre à jour l'état avec les valeurs des cookies s'ils existent
        if (savedTheme) {
            setTheme(savedTheme);
        }
        if (savedLangue) {
            setLangue(savedLangue);
        }
    }, []);
    return (
        <div>
            <Titre/>
            <meta name="description" content={metadata.description} />

            <section className={styles.banner}>
                <Image
                    src={BejaiaVue}
                    alt="BejaiaVue"
                   
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.bannerText}>
                    <h1>Bienvenue à Bejaia</h1>
                    <p>Découvrez la perle de la Méditerranée</p>
                </div>
            </section>

            <section className={styles.about}>
                <h2>À Propos de Bejaia</h2>
                <p>Bejaia est une ville côtière située en Kabylie, célèbre pour ses paysages magnifiques, son riche patrimoine historique et sa culture vibrante. Fondée à l'époque romaine, Bejaia a évolué pour devenir une destination touristique incontournable en Algérie.</p>
            </section>

            <section className={styles.attractions}>
                <h2>Principales Attractions Touristiques</h2>
                <div className={styles.attractionList}>
                    <div className={styles.attraction}>
                        <Image
                            src={capCarbon}
                            alt="capCarbon"
                            height={384}
                            width={384}
                        />
                        <h3>Cap Carbon</h3>
                        <p>Un lieu spectaculaire offrant des vues panoramiques sur la mer Méditerranée et des falaises impressionnantes.</p>
                    </div>
                    <div className={styles.attraction}>
                        <Image src={gouraya} alt="gouraya" height={200} width={300} />
                        <h3>Parc National de Gouraya</h3>
                        <p>Un paradis pour les amoureux de la nature, avec des sentiers de randonnée, une faune diverse et des paysages époustouflants.</p>
                    </div>
                </div>
            </section>

            <section className={styles.activities}>
                <h2>Activités et Loisirs</h2>
                <ul>
                    <li>Plongée sous-marine dans les eaux cristallines de la Méditerranée.</li>
                    <li>Randonnée dans les montagnes environnantes.</li>
                    <li>Participation aux festivals culturels locaux.</li>
                </ul>
            </section>

            <section className={styles.gastronomy}>
                <h2>Gastronomie Locale</h2>
                <p>Dégustez les spécialités culinaires de Bejaia, telles que le couscous, la tajine et les délicieux fruits de mer frais. Ne manquez pas les restaurants locaux pour une expérience gastronomique authentique.</p>
            </section>

            <section className={styles.accommodation}>
                <h2>Hébergement</h2>
                <p>Que vous cherchiez un hôtel de luxe ou une auberge conviviale, Bejaia offre une variété d'options d'hébergement pour tous les budgets.</p>
            </section>

            <section className={styles.testimonials}>
                <h2>Témoignages</h2>
                <blockquote>
                    <p>« Bejaia est une ville incroyable avec tant de choses à voir et à faire. Les gens sont chaleureux et accueillants, et la nourriture est délicieuse. » - Sarah, touriste</p>
                </blockquote>
            </section>
        </div>
    );
}
