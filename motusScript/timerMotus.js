let s = 120;
let intervalId
let timerMotus = () => {
    if (s > 0) {
        intervalId = setInterval(() => {
            s--;
            document.getElementById('timerMotus').textContent = s;
            verifWinTimerCalcul();
        }, 1000)
    } 
}

let verifWinTimerCalcul = () => {
    if (s == 0) {
        
    }
}