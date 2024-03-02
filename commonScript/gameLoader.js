// Fonction pour charger le jeu Calcul Game dans l'iframe
function loadCalculGame() {
    // supprime les iframe deja ouvert
    iframe = document.getElementsByTagName('iframe')
    for(let i = 0; i < iframe.length; i++ ){
        iframe[i].classList.add('hidden')
    }
    document.getElementById('calculgameframe').classList.remove('hidden') //enleve la classe hidden a l'iframe qui nous interesse
    document.getElementById('calculgameframe').src = 'calculGame.html';
    document.getElementById('calculgameframe').classList.add('iframeCalcul')
}

// Gestionnaire d'événements pour le lien "Calcul Game"
document.getElementById('calculGameLink').addEventListener('click', loadCalculGame);

//fonction pour charger motus dans l'iframe
function loadMotusGame() {
    console.log('oops')
    // Charger la page HTML du jeu Calcul Game dans l'iframe
    iframe = document.getElementsByTagName('iframe')
    for(let i = 0; i < iframe.length; i++ ){
        iframe[i].classList.add('hidden')
    }
    document.getElementById('motusgameframe').classList.remove('hidden')
    document.getElementById('motusgameframe').src = 'motus.html';
    document.getElementById('motusgameframe').classList.add('iframeMotus')
}

// Gestionnaire d'événements pour le lien "Calcul Game"
document.getElementById('motusGameLink').addEventListener('click', loadMotusGame);
