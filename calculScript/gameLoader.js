// Fonction pour charger le jeu Calcul Game dans l'iframe
function loadCalculGame() {
    console.log('oops')
    // Charger la page HTML du jeu Calcul Game dans l'iframe
    document.getElementById('gameframe').src = 'calculGame.html';
}

// Gestionnaire d'événements pour le lien "Calcul Game"
document.getElementById('calculGameLink').addEventListener('click', loadCalculGame);
