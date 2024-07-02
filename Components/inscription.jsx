// Inscription.js

import { useState } from 'react';
import styles from './inscription.module.css';

export default function Inscription() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Fonction de validation du mot de passe
  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Le mot de passe doit contenir au moins 8 caractères.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Le mot de passe doit contenir au moins une lettre majuscule.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Le mot de passe doit contenir au moins une lettre minuscule.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Le mot de passe doit contenir au moins un chiffre.';
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return 'Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*).';
    }
    return '';
  };

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validation des champs
    const usernameError = username.trim() === '' ? 'Le nom d\'utilisateur est requis.' : '';
    const emailError = email.trim() === '' ? 'L\'email est requis.' : '';
    const passwordError = validatePassword(password);
    const confirmPasswordError = password !== confirmPassword ? 'Les mots de passe ne correspondent pas.' : '';

    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError
    });

    // Vérifier s'il y a des erreurs
    if (usernameError || emailError || passwordError || confirmPasswordError) {
      return;
    }

    // Si la validation passe, simuler une inscription
    alert(`Inscription réussie pour ${username}!`);
    // Réinitialiser les champs
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  // Gestionnaires pour la modification des champs
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrors({ ...errors, username: '' }); // Efface l'erreur lors de la modification
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: '' }); // Efface l'erreur lors de la modification
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: '' }); // Efface l'erreur lors de la modification
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setErrors({ ...errors, confirmPassword: '' }); // Efface l'erreur lors de la modification
  };

  return (
    <>
      <head>
        <title>Inscription - Votre Application</title>
        <meta name="description" content="Inscrivez-vous pour accéder à notre plateforme." />
        {/* Autres métadonnées comme les balises meta keywords, etc., si nécessaires */}
      </head>
      <div className={styles.inscriptionContainer}>
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && <div className={styles.error}>{errors.username}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <div className={styles.error}>{errors.password}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
          </div>
          <button type="submit" className={styles.submitButton}>S'inscrire</button>
        </form>
      </div>
    </>
  );
}
