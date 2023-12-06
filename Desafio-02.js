let wins = 500
let loses = 0
let winsAndLoses = calculation(wins, loses)
let ranked = rank(winsAndLoses)

function calculation(wins, loses) {
    return wins - loses
}
function rank(winsAndLoses) {
    if (winsAndLoses <= 10) { return ("Ferro") }
    else if (winsAndLoses <= 20) { return ("Bronze") }
    else if (winsAndLoses <= 50) { return ("Prata") }
    else if (winsAndLoses <= 80) { return ("Ouro") }
    else if (winsAndLoses <= 90) { return ("Diamante") }
    else if (winsAndLoses <= 100) { return ("Lendário") }
    else if (winsAndLoses >= 101) { return ("Imortal") }
}
console.log("O Herói tem saldo de " + winsAndLoses + " está no nível de " + ranked + ".")