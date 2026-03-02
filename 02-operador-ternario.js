let media = 7.6,situacao = media >= 7 , situaçao
 if(media >= 6){
    situacao = 'Aprovado'
    }
    else{
        situacao = 'Reprovado'
    }
    console.log('situacao do aluno  com media',media,'é',situacao,  " ")
    /* decidindo a situação do aluno usando operador ternário */
        media = 5.1
   situacao = media >= 6 ? 'Aprovado' : 'Reprovado'
   console.log('situacao do aluno  com media',media,'é',situacao)   

   //-----------------------------------------------------------------------

   let user = 'guest', msg
   /*decidindo se om usario pode entrar ou nao usando if ... else 
    quando ha apenas uma linha de código apos um if , wile, etc..,
   podemos omitir as chaves */
    if(user === 'admin') msg = 'Bem Vindo, Admin'       
    else msg = 'Acesso Negado'
    console.log(user, msg)
    //tomando  a mesma decisão usando operador ternário
    msg = user === 'admin' ? 'Bem Vindo, Admin' : 'Acesso Negado'
    console.log(user, msg)  


    /*decidindo se o usuário pode entrar ou não usando operador ternário */

// exemplo adicional, altere o valor de `user` para testar
user = 'guest';
msg = user === 'admin' ? 'Acesso liberado' : 'Acesso negado';
console.log(user, msg);

