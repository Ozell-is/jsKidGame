let word = '';


// on recupere le mot aleatoire
let getWord = () => {
    let index = Math.floor(Math.random() * arrayMotus.length);
    word = arrayMotus[index];
    document.getElementById('motusLength').textContent = word.length;
    console.log(word + ' je te choisis')
    return word;
}

//on supprime le mot du tableau
let removeWord = () => {
    let index = arrayMotus.indexOf(word)
    arrayMotus.splice(index, 1)
}



//on start le jeu
let motus = () => {
    getWord(arrayMotus);
    removeWord();

}
motus();

