function verifWinTimerCalcul(){
    if (s == 0) {
        document.getElementById('calcul').innerHTML = `vous avez un score de ${score} point, malheuresement vous n'avez pas fini avant la fin du temps imparti`;
        document.getElementById('resultCalcul').disabled= true;
        document.getElementById('submitCalcul').disabled= true;
        clearInterval(intervalId)
    }

}

function verifWinScoreCalcul(){
    if(score >40) {
        document.getElementById('calcul').innerHTML = `felicitation vous avez un score de ${score} point`;
        document.getElementById('resultCalcul').disabled= true;
    } else {
        document.getElementById('calcul').innerHTML = `Vous avez un score de ${score} point, il vous fallait un minmum de 40, reessayer`;
        document.getElementById('resultCalcul').disabled= true;
    }
}