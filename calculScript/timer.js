let s = 60;
let intervalId
let timer = () => {
    if (s > 0) {
        intervalId = setInterval(() => {
            s--;
            document.getElementById('timerCalcul').textContent = s;
            verifWinTimer();
        }, 1000)
    } 
}

