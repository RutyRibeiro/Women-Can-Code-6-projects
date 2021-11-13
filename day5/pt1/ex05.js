
var data = new Date();

const validamaioridade = (anoDeNascimento) => {
    idade = data.getFullYear() - anoDeNascimento;

    return idade > 18 ? "Liberação autorizada" : idade == 18 ? "Validar documento de identidade" : "ATENÇÃO: Liberação NÃO autorizada";
}
console.log(validamaioridade(2004))