/* Função tradicional com 1 parametro */
function quadrado (n){
    return n * n
}

console.log('[TRADI] o quadrado de 7 é', quadrado (7))

/*
Função equivalente, usando a sintaxe Arrow Function:
 - não necessita de chaves 
 -nao necessita de parênteses em torno do paramentro
 -nao necessita da palavra-chave "return"
 - a palavra-chave function é substituida pela flecha
 - a arrow funtion é invocada usando o nome da constante 
    que a recebe como valor

 */
const quadradoA = n => n * n 
console.log('[ARROW] o quadrado de 7 é', quadrado(7))   

/* Função tradicional com mais de um porametro e apenas uma linha com retur */
function calc(a, b, c){
    return a * b + c 
}
console.log('[TRADI] O resultado do cálculo é', calc(10, 20, 30))
/*
 Equivalente em sintaxe ARROW FUNCTION
 ~> quando o número de parametro é diferente de 1, os parametros
 voltam a ser obrigatorios
 */
const calc = (a,b,c) => a * b + c
console.log('[ARROW]'O resultado do calculo é , calcA(10, 20, 30))

/* Função tradicional sem parametros e uma limha de retorno */
function msgErro(){
    return "ERRO FATAL!"
    
}
/*
    Equivalente na sintaxe ARROW FUNTION
    ~> parenteses vazios devem usados para marcar  o local
    do parâmetro
 */
const msgErroA = () => "ERRO FATAL!" 
console.log('[ARROW] Mensagem de erro : ', msgErroA())

/* Função Tradicional com um parâmetro e várias linhas no corpo */
 function fatorial(x){
    let resultado = 1
    for (let i = x; i > 1; i--)resultado *= i

}
console.log('[TRADI] O fatorial de 8 é : ' , fatorial(8))

/* Equivalente na Sintese ARROW FUNction
 ~> Não há economia de linha no corpo da função.Mesmo assim,
 PROJETOS REACT PROFISSIONAIS
 As chaves voltam a ser obrigatorias , assim como a palavra 
 - chave "Return"
 */
const fatorial = x => {
    let resultado = 1 
    for (let i = x; i>1;i--) resultado *= i
    return resultado
}
console.log('[ARROW] O fatorial de 8 é: ', fatorialA(8))
