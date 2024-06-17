// Connexion.js

import { useState } from 'react';
import styles from './Connexion.module.css';

export default function Connexion() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fonction pour valider les champs
  const validateFields = () => {
    if (username.trim() === '') {
      setError('Le nom d\'utilisateur est requis.');
      return false;
    }

    if (password.trim() === '') {
      setError('Le mot de passe est requis.');
      return false;
    }

    setError('');
    return true;
  };

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateFields()) {
      // Simuler une connexion réussie (ici, on affiche simplement une alerte)
      alert(`Connexion réussie pour ${username}!`);

      // Réinitialiser les champs et les erreurs
      setUsername('');
      setPassword('');
      setError('');
    }
  };

  // Gestionnaire pour la modification du nom d'utilisateur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (error && event.target.value.trim() !== '') {
      setError('');
    }
  };

  // Gestionnaire pour la modification du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (error && event.target.value.trim() !== '') {
      setError('');
    }
  };

  return (
    <div className={styles.connexionContainer}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.submitButton}>Se connecter</button>
      </form>
    </div>
  );
}
