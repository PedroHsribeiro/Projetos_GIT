// listaAlunos = ["Guilherme", "João", "Julielson", "Jéssica", "Denise"]

// for (let contador = 0; contador <5; contador++){
//     console.log(`Boa tarde ${listaAlunos[contador]}`)
// }

const inserirdados = require("prompt-sync")({sigint: false})


let nomeusuario


nomeusuario = inserirdados("Digite seu nome de usuário: ")


while (nomeusuario == "Pedro"){
    console.log("Boa tarde, Pedro")
}