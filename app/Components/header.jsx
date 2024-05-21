import styles from './header.module.css'
import Image from 'next/image'


export default function Header() {
    return <header className={styles.header}>
        <Image

            

        />
         <nav class="main-nav">
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tours">Tours</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a href="#booking" class="cta-button">Réservez maintenant</a>
        
    </header>
}


