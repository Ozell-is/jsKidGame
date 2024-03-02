let games = 0;
let level = 1;
let score = 0;
let keys = 0;
let calcul = "";
// let e = parseInt(Math.random() * 1000)
// let f = parseInt(Math.random() * 1000)

const randomSignLVL1 = ['+', '-']

const randomSignLVL3 = ['+', '-', '*']

//recupere un numero de clefs aleatoire d'un tableau
function getRandomKeys(arr) {

    return Math.floor(Math.random() * arr.length);
}

// recupere la valeur correspondant a l'id
function extractArrayId(arr) {
    let keys = getRandomKeys(arr)
    return arr[keys]
}


//fonction pour vider  le input 
function clearResult() {
    document.getElementById('resultCalcul').value = "";
}


//fonction pour recuperer la reponse et declencher les fonction a lenvoi

function resultSubmit() {
    let resultInput = document.getElementById('resultCalcul').value
    if (resultInput == eval(calcul)) {
        score += level;

    } else {
        score -= level;

    }
    document.getElementById('scoreCalcul').textContent = score;
    document.getElementById('levelCalcul').textContent = level

    calculStyle(level);
    clearResult();
    continueGame();
}
//add event listener pour la soumissions du form
document.getElementById('formCalcul').addEventListener('submit', (e) => {
    e.preventDefault();
    resultSubmit
})



// game core
function game() {
    calculLVL1();

}


function continueGame() {
    if (games < 5) {
        games += 1;
        calculLVL1();
        console.log(games)
    } else if (games < 10) {
        games += 1;
        calculLVL2();
        console.log(games + ' level2')
    } else if (games < 15) {
        games += 1;
        calculLVL3();
        console.log('level 3')
    } else if (games < 20) {
        games += 1;
        calculLVL4();
        console.log('level 4')
    } else if (games = 20) {
        verifWinScoreCalcul();
    }
}




game();

