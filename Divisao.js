let Numerador = prompt ("Digite o numerador :")
let Denominador = prompt ("Digite o denominador :")

if (Denominador && Numerador == 0)

{
    alert ("Não é possivel dividir o por 0")
}

else
{
    let numero = Number (Numerador)
    let divisor = Number (Denominador)
    let resultado = numero / divisor

    alert (`O resultado de ${numero} divido por ${divisor} é: ${resultado}`);
}