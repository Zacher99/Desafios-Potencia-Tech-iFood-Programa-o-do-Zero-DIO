//Desafio do Herói

let nomeHeroi = "João"
let expHeroi = 10001

let eloHeroi = ""
if(expHeroi<1000){eloHeroi = "Ferro";}
else if(expHeroi<=2000){eloHeroi = "Bronze"}
else if(expHeroi<=5000){eloHeroi = "Prata"}
else if(expHeroi<=7000){eloHeroi = "Ouro"}
else if(expHeroi<=8000){eloHeroi = "Platina"}
else if(expHeroi<=9000){eloHeroi = "Ascendente"}
else if(expHeroi<=10000){eloHeroi = "Imortal"}
else (expHeroi>10001);{eloHeroi = "Radiante"}
 console.log("O herói de nome, " + nomeHeroi + ", está no nivel de " + eloHeroi);