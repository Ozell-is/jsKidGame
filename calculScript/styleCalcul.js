let startCalcul = document.getElementById('startCalcul');
//commence la partie une fois le bouton cliqué
startCalcul.addEventListener('click', function () {
    let container = document.getElementById('calculContainer');
    if (container) {
        // Si l'élément container est trouvé, retirer la classe hidden
        container.classList.remove('hidden');
        startCalcul.classList.add('hidden')
        timerCalcul();
    } else {
        console.error("L'élément container n'a pas été trouvé.");
    }

})



// Fonction pour appliquer le style en fonction du niveau
let calculStyle = (level) => {
    let container = document.getElementById('calculContainer');
    container.className = ' py-5'; // Efface toutes les classes existantes
    container.classList.add('level' + level); // Ajoute la classe correspondant au niveau
}

// Appel de la fonction pour appliquer le style au niveau 1
