//Encontrando o menor e maior numero em uma serie
let minimo = Math.min(2, -5, 4 , 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0,  11, -1)
console.log('valores minimo e maximo detemidados a partir de valorew avulsos:')
console.log({minimo, maximo})

console.log(' '.repeat(80))
//E se os numeros estivem em um vetor?
const numeros = [2, -5, 4, 0, 11, -1]
/* O metodo Math.min() e Math.max() nao aceitam um vetor como argumento , mas podemos usar o operador de espalhamento para passar os elementos do vetor como argumentos individuais para as funcoes */
minimo = Math.min(numeros)
maximo = Math.max(numeros)
console.log('valores minimo e maximo detemidados a partir de um vetor:')
console.log({minimo, maximo})

console.log(' '.repeat(80))

/* A sintese de espalhamento (spreading), respresenta por ... antes do nome de uma variavel que contem um vetor ou objeto,
 capaz de "desempacotar" um vetor ou obejeto em uma serie de valores avulsos
 */
minimo = Math.min(...numeros)
maximo = Math.max(...numeros)
console.log('valores minimo e maximo detemidados a partir de um vetor usando espalhamento:')
console.log({minimo, maximo})

/* outros usos para sintases de espalhamento*/
const carros1 = {
    modelo: 'Civic',
    marca: 'Honda',
    ano: 2020,
    cor: 'prata'
}
//"copiando carros1 para carros2
// const carro2 = carro1 //nao funciona!
//Para criar uma copia real de um objeto ( e nao um nova referrencia 
//a ele), podemos usar a sintese de espalhamneto . ele "desmonta" o objeto original
//e em seguida "remonta" , mas em uma nova poiscao de memoria
    
const carro2 = {...carros1}
// mudando o valor das propriedades de carro2
carro2.modelo = 'Corolla'
carro2.marca = 'Toyota'
carro2.ano = 2021
carro2.cor = 'preto'
console.log(" ".repeat(80))
//Exibiando ambos os carrros
console.log({carros1, carro2})


