const   nome = 'valcicleide'
const idade = 20
const cidade = 'Morro alto de  Cima/MG'
//mescalndo stirng com variaveis usando  concatenação
const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + " "
console.log(msg1)
/* Meclando string com variaveis usando template string */
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
console.log(msg2)   

// detro de uma sttring , nao estamos limitados a usar 
// apenas variaveis dentro do simbolo ${}. qualquuer codigo js
//valido pode ser empregado ali.
console.log(`Em $  {2026 + 7 },${nome.toUpperCase()}tera ${idade + 7}anos.`)
