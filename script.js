let nomeHeroi = "Lucas"
let xpHeroi = 10000
let nivelHeroi
if (xpHeroi <= 1000){
    nivelHeroi = "Ferro"
} else if (1001 <= xpHeroi && xpHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if (2001 <= xpHeroi && xpHeroi <= 5000) {
    nivelHeroi = "Prata"
} else if (5001 <= xpHeroi && xpHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if (7001 <= xpHeroi && xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if (8001 <= xpHeroi && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if (9001 <= xpHeroi && xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else if (10001 <= xpHeroi) {
    nivelHeroi = "Radiante"
} else { 
    console.log("Por favor, digite um número válido positivo")
}
    
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)

// É possível fazer de uma forma mais simples, limpa e organizada
//Basta comparar <= usando o maior valor para o nível do Herói
//Exemplo: else if (xpHeroi <= 10000) { nivelHeroi = "Imortal"}