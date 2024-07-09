
import { useState, useEffect } from 'react';
export default function Titre(){
    //variable pour contenir le nombrte de clic
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        document.title = `Bejaia`;
      });
    return (
      <div>
        <p>Bejaia</p>
        
      </div>
    );
}