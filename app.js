import prompt from "prompt-sync";
let ler = prompt()

import { menuPrincipal, escolhaNumero } from './menu.js';
import { ExibirSaldo, depositar, sacar, investimento } from './financeiro.js';

// |1 - Depositar
// |2 - Sacar
// |3 - Exibir saldo
// |4 - Investir
// |5 - Sair

let saldo = 0

menuPrincipal()

let continuar = true


while ( continuar ){
    let escolha = escolhaNumero()

    if ( escolha == 1 ){
        saldo = depositar ( saldo );

    }

    else if ( escolha == 2 ){
        saldo = sacar ( saldo );

    }

    else if ( escolha == 3 ){
        ExibirSaldo ( saldo );

    }


    else if ( escolha === 4 ) {
        let a = investimento(  )

        console.log ( a );
    } 

    else if ( escolha == 5 ){
        console.log(`Até uma proxima`)
        break

    }

    else {
        console.log('Opção inválida. Tente novamente.');
    }


}



