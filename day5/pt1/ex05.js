/*
    Vamos construir uma função validaMaioridade para validar se o ano de nascimento fornecido corresponde a uma pessoa com mais de 18 e assim seja liberada ou não a entrada dela em um determinado show.

    1. Receba um parâmetro numérico `anoNascimento` ;
    2. Valide se, pela data de nascimento, se trata de alguém com maior de 18 anos;
    3. Se for maior que 18 anos, retorne uma `string` dizendo `"Liberação autorizada"`;
    4. Se for igual a 18 anos, retorne uma `string` dizendo `"Validar documento de identidade"`;
    5. Se for menor de 18 anos, retorne uma `string` dizendo `"ATENÇÃO: Liberação NÃO autorizada"`;
    6. Atribua o retorno a uma variável chamada `resultado` e imprima-a.
*/
var data = new Date();

const validamaioridade = (anoDeNascimento) => {
    idade = data.getFullYear() - anoDeNascimento;

    return idade > 18 ? "Liberação autorizada" : idade == 18 ? "Validar documento de identidade" : "ATENÇÃO: Liberação NÃO autorizada";
}
console.log(validamaioridade(2004))