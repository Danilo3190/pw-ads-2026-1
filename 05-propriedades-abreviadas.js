// alguns dados de um usuário
const fullname = 'Jonicleisson Junqueira Junior'
const username = 'junin'
const group = 'alunos'

//Criando um objeto a aprtir das variaveis acima
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/*
Quando o nome da propriedade de um objeto é indentico
a da variavel que lhe dara o valor , é possivel usar a sintese  chamada Propriedades Abreviadas.
Ela permite nao repetir os nomes das variaveis, á frente dos nomes das propriedades
*/
const user2 = {
    fullname,
    username,
    group
}
console.log(user2)  

// um objeto pode mescalar  propriedades abreviadas e
// nao abreviadas
const user3 = {
    fullname,
    username,
    passoword: 'AvantePalestra',
    group,
    lastLogin: '2026-03-02 11:33:45'
}
console.log(user3)  

/* Usando Propriedades abreviadas para depuração(debug) */
const x = 10, y = 'batata'

/*
Exibindo os valores das duas variavaeis com console.log ()
Observe que os valores sao mostrados , mas a saida nao 
informa quais as variaveis de onde provem os valores .
*/
console.log(x, y) // saída: 10 'batata'

/*
Saida melhorada : passando um objeto formado pelas variaveis
como propriedades abreviadas para o console .log(), conseguimos indentificar de onde vem os valor.
*/
console.log({x, y}) // saída: { x: 10, y: 'batata' }



