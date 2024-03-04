let s = 120;
let intervalId
let timerMotus = () => {
    if (s > 0) {
        intervalId = setInterval(() => {
            s--;
            document.getElementById('timerMotus').textContent = s;
            verifWinTimerMotus();
        }, 1000)
    }
}

let verifWinTimerMotus = () => {
    if (s == 0 && score < 3) {
        document.getElementById('motus').innerHTML = "vous n'avez pas atteint l'objectif avant la fin du temps imparti";
        document.getElementById('submitMotus').disabled = true;
        document.getElementById('resultMotus').disabled = true;
        clearInterval(intervalId);
    } else if (s== 0 && score > 3) {
        document.getElementById('motus').innerHTML = "félicitation";
        document.getElementById('submitMotus').disabled = true;
        document.getElementById('resultMotus').disabled = true;
        clearInterval(intervalId);
    } else if (score == 15) {
        document.getElementById('motus').innerHTML = "INCROYABLE, tu a commis l'exploit de trouver tout les mots";
        document.getElementById('submitMotus').disabled = true;
        document.getElementById('resultMotus').disabled = true;
        clearInterval(intervalId);
    }
}