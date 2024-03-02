let s = 60;
let intervalId
let timerCalcul = () => {
    if (s > 0) {
        intervalId = setInterval(() => {
            s--;
            document.getElementById('timerCalcul').textContent = s;
            verifWinTimerCalcul();
        }, 1000)
    } 
}

