import styles from './header.module.css';
import Image from 'next/image';
import logo from '../public/logo.webp'

export default function Header({ setPage }) { 
    return (
        <header className={styles.header}>
            <Image
               src={logo}
               alt="Logo React"
               width={80}
               
               
            />
            <nav className={styles.mainNav}> 
                <ul>
                    <li><button onClick={() => setPage('accueil')}>Accueil</button></li>
                    <li><button onClick={() => setPage('apropos')}>A propos</button></li>
                    <li><button onClick={() => setPage('contact')}>Contact</button></li>
                    <li><button onClick={() => setPage('reservation')}>Reservation</button></li>
                    <li><button onClick={() => setPage('service')}>Service</button></li>
                    <li><button onClick={() => setPage('tours')}>Tours</button></li>
                </ul>
            </nav>
            
        </header>
    );
}
