import prompt from "prompt-sync";
let ler = prompt()


export function menuPrincipal ( opcoes ) {
    console.log(`
        |1 - Depositar
        |2 - Sacar
        |3 - Exibir saldo
        |4 - Investir
        |5 - Sair
`)
}

export function escolhaNumero ( escolha ) {
    console.log(`Informe um numero`)

    return Number ( ler ( ) )
}
































