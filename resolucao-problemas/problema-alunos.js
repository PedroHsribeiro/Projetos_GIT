//Sistema que realiza a contagem e classificação da quantidade de alunos em uma sala de aula 
const insertdata = require("prompt-sync")({sigint: true})

let alunos = 9
if (alunos == 0){
    console.log("Não há alunos na sala no momento.")
    return
}
for (contador = 0; contador < alunos; contador++){
    console.log(contador)
}


if (alunos % 2 == 0){
    console.log(`O número ${contador} é PAR`)  
}
else{
    console.log(`O número ${contador} é IMPAR `)    
}
