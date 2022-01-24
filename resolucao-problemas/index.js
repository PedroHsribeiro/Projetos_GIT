const insertdata = require("prompt-sync")({sigint: true}) //Possibilitar a inserção de dados pelo usuário
let userage 
let eventname 
let speakers 
let eventdate 
let participants
var todaydate = new Date()

console.log("Seja muito bem-vindo ao sistema de cadastro de Eventos.")

userage = insertdata("Qual sua idade? ")
if (userage < 18){
    console.log("Lamento, pessoas menores de idade não podem cadastrar eventos.")
}
eventname = insertdata("Qual o nome do evento que deseja cadastrar? ")
eventdate = new Date(insertdata("Qual a data do evento? (Insira no formato mm/dd/aaaa) "))
if (eventdate <= todaydate){
    console.log("Não é possível registrar o evento para hoje ou a data selecionada é anterior à hoje.")
}
participants = insertdata("Qual a quantidade de participantes do evento? ")
if (participants > 100){
    console.log("Não é possível realizar o cadastro, a quantidade de participantes excede a quantidade máxima de 100.")
}
speakers = insertdata("Quantos palestrantes terá o evento? ")

console.log("Cadastro realizado com sucesso. \n Seguem as informações do evento: \n Nome do evento", eventname, "\n Data do evento: ", eventdate,"\n Participantes", participants, "\n Palestrantes",speakers)




