let startCalcul = document.getElementById('startCalcul');
//commence la partie une fois le bouton cliqué
startCalcul.addEventListener('click',function(){
    let container = document.getElementById('calculContainer');
    if (container) {
        // Si l'élément container est trouvé, retirer la classe hidden
        container.classList.remove('hidden');
        startCalcul.classList.add('hidden')
        timer();
    } else {
        console.error("L'élément container n'a pas été trouvé.");
    }

})
//change la couleur de fond en fonction du level
let calculStyle = (level) => {
    let container = document.getElementById('calculContainer');
    
    if (level ==1) {
        container.classList.add('level1')
    } else if (level == 2) {
        container.classList.add('level2')
    } else if (level == 3) {
        container.classList.add('level3')
    } else if (level == 4) {
        container.classList.add('level4')
    }
}



