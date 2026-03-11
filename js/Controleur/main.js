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
