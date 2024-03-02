let startMotus = document.getElementById('startMotus');
//commence la partie une fois le bouton cliqué
startMotus.addEventListener('click', function () {
    let container = document.getElementById('motusContainer');
    if (container) {
        // Si l'élément container est trouvé, retirer la classe hidden
        container.classList.remove('hidden');
        startMotus.classList.add('hidden')
        timerMotus();
    } else {
        console.error("L'élément container n'a pas été trouvé.");
    }

})