//Sistem utilizado para cadastro de peças 
const insertdata = require("prompt-sync")({sigint: true})
let pieceweight
let piecename
let boxopieces 

console.log("Bem vindo ao sistema de cadastro de peças.")

piecename = insertdata("Qual o nome da peça que deseja cadastrar?\n ")
while (piecename.length < 3){
    piecename = insertdata("O nome da peça deve possuir, no mínimo, 4 caracteres. Insira o nome da peça novamente: \n")
}

pieceweight = insertdata("Qual o peso da peça? \n")
if (pieceweight > 100){
    console.log("Peças com mais de 100g não podem ser cadastradas. ")
    return
}

boxopieces = insertdata("Quantas peças deseja cadastrar? \n")
console.log("Peças cadastradas com sucesso.\n Quantidade de caixas necessárias: ",Math.ceil((boxopieces/10)))