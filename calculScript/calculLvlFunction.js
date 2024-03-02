
// fonction de calcul
function calculLVL1() {
    let a = parseInt(Math.random() * 10)
    let b = parseInt(Math.random() * 10)
    level = 1
    
    arrayCalcul = [a, extractArrayId(randomSignLVL1), b];
    calcul = arrayCalcul.join("");
    document.getElementById('calcul').textContent = calcul

}
function calculLVL2() {
    let a = parseInt(Math.random() * 100)
    let b = parseInt(Math.random() * 100)
    level = 2
    arrayCalcul = [a, extractArrayId(randomSignLVL1), b];
    calcul = arrayCalcul.join("");
    document.getElementById('calcul').textContent = calcul

}
function calculLVL3() {
    let a = parseInt(Math.random() * 10)
    let b = parseInt(Math.random() * 10)
    level = 3
    arrayCalcul = [a, extractArrayId(randomSignLVL3), b];
    calcul = arrayCalcul.join("");
    document.getElementById('calcul').textContent = calcul

}
function calculLVL4() {
    let a = parseInt(Math.random() * 10)
    let b = parseInt(Math.random() * 100)
    level = 4
    arrayCalcul = [a, extractArrayId(randomSignLVL3), b];
    calcul = arrayCalcul.join("");
    document.getElementById('calcul').textContent = calcul

}
