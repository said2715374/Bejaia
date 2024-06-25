import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    const templateParams = {
      to_name: 'said',
      name,
      email,
      message
    };

    try {
      // Envoi de l'email avec EmailJS
      await emailjs.send('service_im2v2jb', 'template_ryat23l', templateParams, 'nfj3jpXRw96j6yfo9');
      toast.success('Votre message a été envoyé avec succès!');
      reset(); // Réinitialise le formulaire après envoi réussi
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      toast.error('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contactez-nous</h1>

      <div className={styles.contactInfo}>
        <h2>Nos Informations</h2>
        <p><strong>Adresse:</strong> 123 Rue de la Liberté, Bejaia, Algérie</p>
        <p><strong>Téléphone:</strong> +213 34 56 78 90</p>
        <p><strong>Email:</strong> contact@bejaia.com</p>
      </div>

      <div className={styles.contactForm}>
        <h2>Envoyez-nous un message</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              placeholder='Entrez votre nom'
              {...register('name', { required: 'Nom requis' })}
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email requis',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Format email invalide'
                }
              })}
              placeholder='Entrez votre email'
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message requis' })}
              rows="5"
              placeholder='Entrez votre message'
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
          </div>
          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      </div>

      <div className={styles.map}>
        <h2>Notre Emplacement</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2939823124517!2d4.5338773144887275!3d36.75189297996566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d9c6bc5b3b01f%3A0x9baf8e0fbb7b2c2b!2sBejaia!5e0!3m2!1sen!2sdz!4v1620222769713!5m2!1sen!2sdz"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <ToastContainer /> {/* Container pour les notifications Toastify */}
    </div>
  );
}
