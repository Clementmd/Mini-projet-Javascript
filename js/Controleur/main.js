import * as UserModel from '../models/userModel.js';


const input = document.getElementById('pokemonInput');
const searchBtn = document.getElementById('searchBtn');
const favBtn = document.getElementById('favBtn');

// On écoute chaque touche tapée dans le champ
input.addEventListener('input', () => {
    const value = input.value.trim();
    
    // Si le champ n'est pas vide, on active les boutons 
    if (value.length > 0) {
        searchBtn.disabled = false;
        favBtn.disabled = false;
    } else {
        // Sinon, on les bloque
        searchBtn.disabled = true;
        favBtn.disabled = true;
    }
});



input.addEventListener('input', () => {
    const value = input.value.trim();
    
    const getRikishiData = async () => {
  const url = 'https://www.sumo-api.com/api/rikishis';

  try {
    const response = await fetch(url);

    // On vérifie si la réponse est correcte (status 200-299)
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    
    // On affiche les données dans la console pour voir la structure
    console.log(data);
    return data;
  } catch (error) {
    console.error("Impossible de récupérer les données :", error);
  }
};

// Appel de la fonction
getRikishiData();
});


export const getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "Utilisateur introuvable" });
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
};
