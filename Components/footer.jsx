import styles from '../Components/footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                <p>Email: info@site-touristique.com</p>
                <p>Téléphone: +1 514 569 9703</p>
            </div>
        </footer>
    );
};

export default Footer;
