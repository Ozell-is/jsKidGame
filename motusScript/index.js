let word = '';
let misteries = '';
// on recupere le mot aleatoire
let getWord = () => {
    let index = Math.floor(Math.random() * arrayMotus.length);
    word = arrayMotus[index];
    console.log(word + ' je te choisis')
    return word;
}



//on transforme le mot en tableau
let toArray = (mots) => {
    let array = Array.from(mots)
    console.log(array + ' is a array')
    console.log(typeof (array))
    return array
}

//garder les lettre communes
let keepLetter = (motMystere, motAComparer) => {
    let commonLetter = []
    for (letter of motMystere) {
        if (motAComparer.includes(letter)){
            commonLetter.push(letter)
            
        }
        console.log(commonLetter)
    }
}

//compare les mots
let compareWorld = (motMystere, motAComparer) => {
    motAComparer = toArray(motAComparer);
    motMystere = toArray(motMystere);
    console.log(motAComparer, motMystere)
    if (motMystere == motAComparer) {
        removeWord();
    }
}
//on supprime le mot du tableau
let removeWord = () => {
    let index = arrayMotus.indexOf(word)
    arrayMotus.splice(index, 1)
    console.log('byebye ' + word)
    console.log(arrayMotus)
}

//on start le jeu
let motus=()=>{
    getWord(arrayMotus);
    compareWorld(word,'chat');
    keepLetter(word,'chat')

}

motus();
