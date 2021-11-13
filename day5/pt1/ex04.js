/*
    Esse trecho irá chamar a função `calculaSoma`, que retorna um valor de `17` e o atribui à variável `resultadoSoma`.

            let resultado = 0;

            function processaParametros(numero) {
                return (numero + 3) / 5;
            }

    Chame a função processaParametros com um argumento 7 e atribua seu valor de retorno à variável resultado;

 */


let resultado = 0;

function processaParametros(numero) {
  return (numero + 3) / 5;
}

resultado = processaParametros(7)

console.log(resultado)