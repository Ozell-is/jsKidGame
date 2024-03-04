
let score = 0;
document.getElementById('scoreMotus').textContent = score;
let misteries = '';

//add event listener pour la soumissions du form
document.getElementById('formMotus').addEventListener('submit', (e) => {
    e.preventDefault();
    wordSubmit();
    creatList();
    clearResult();
})



function wordSubmit() {
    let motAComparer = document.getElementById('resultMotus').value
    console.log(motAComparer)
    let motMystere = word;
    compareWorld(motMystere, motAComparer);
    keepLetter(motMystere, motAComparer)

}

//garder les lettre communes
let commonLetters = {};

let keepLetter = (motMystere, motAComparer) => {
    for (letter of motMystere) {
        if (motAComparer.includes(letter) && !commonLetters.hasOwnProperty(letter)) {
            let count = 0;
            for (let i = 0; i < motMystere.length; i++) {
                if (motMystere[i] === letter) {
                    count++;
                }
            }
            commonLetters[letter] = count;
        }
    }

    // Construire une chaîne représentant toutes les lettres communes et leur nombre d'occurrences
    let commonLettersString = "";
    for (let letter in commonLetters) {
        commonLettersString += `${letter} (${commonLetters[letter]}) `;
    }

    // Afficher les lettres communes dans l'élément HTML
    document.getElementById('goodLetter').innerText = commonLettersString;
}




//compare les mots

let compareWorld = (motMystere, motAComparer) => {
    if (motMystere == motAComparer) { // Si le mot soumis est correct
        submitWord = []; // Vide la liste des mots
        commonLetters = {}; // Réinitialise les lettres communes
        resetLists(); // Vide et réinitialise les listes dans le DOM
        goodAnimal(); // Traite la victoire
    }
}
// Fonction appelée lorsque le mot est correct

let goodAnimal = () => {
    score++; // Incrémente le score
    document.getElementById('scoreMotus').textContent = score; // Met à jour l'affichage du score
    submitWord = [];
    
    // Vide la liste des mots soumis
    document.getElementById('listMotus').innerHTML = "";

    // Vide les lettres communes
    document.getElementById('goodLetter').innerText = "";
    console.log("Mot correct trouvé !"); 
    getWord(arrayMotus);
    commonLetters = {};
    removeWord();
}

// Fonction pour vider les listes et réinitialiser
function resetLists() {
    document.getElementById('listMotus').innerHTML = ""; // Vide la liste de mots
    document.getElementById('goodLetter').innerText = ""; // Vide les lettres communes
}



//fonction pour vider  le input 
function clearResult() {
    document.getElementById('resultMotus').value = "";
}


// //on transforme le mot en tableau
// let toArraySubmit = (mots) => {
//     let arraySub = Array.from(mots)

//     return arraySub
// }
// //on transforme le mot en tableau
// let toArray = (mots) => {
//     let array = Array.from(mots)

//     return array
// }

