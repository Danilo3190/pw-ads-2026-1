/*
calcArea() é uma função  que  calcula a area de uma figura geometrica plana , dados a  base , a altura e o tipo da forma
*/
function calcArea(base, altura, tipo = 'retangulo') {
    switch(tipo) {
        case 'retangulo':
            return base * altura
        case 'triangulo':
            return (base * altura) / 2
        case 'circulo':
            return (base / 2) *(altura / 2 ) * Math.PI
        default: // formas invalidas / desconhecidas
            return undefined
    }
}

// testando a função calcArea
console.log(`Area Triangulo 10x30: ${calcArea(10, 30, 'retangulo')}`)// usando o valor padrão 'retangulo'
console.log(`Area circulo 7, 5x7, 5 : ${calcArea(7.5, 7.5, 'circulo')}`)
console.log(`Area retangulo 12 , 8 x15 , 5: ${calcArea(12.8, 15.5  , 'retangulo')}`)
console.log(`Area forma invalida 8 x 17 : ${calcArea(8 , 17,  'H')}`) // tipo desconhecido, retorna undefined    

// Chamado a funcao com apenas dois parametros
console.log(`Area triangulo 20 x 40 : ${calcArea(20, 40)}`) // usando o valor padrão 'retangulo' para calcular a area do retangulo

/* regras para uso de parametros predefinidos
1. os parametros predefinidos devem ser os ultimos da lista de parametros da função
2. pode haver mais de um parametro predefinido. nesse caso, devem ser sempre os Ultimos.
*/


