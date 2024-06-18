import prompt from "prompt-sync";
let ler = prompt()

export function pergunta ( mensagem ) {
    console.log(mensagem)

    return Number ( ler ( ) )
}

export function depositar ( saldo ) {
    let perguntas = pergunta()
    let continuar = true

    while ( continuar ){

        perguntas = pergunta(`
        Digite o valor que deseja depositar
        ( Digite C se deseja cancelar essa ação )
        `)

            if ( perguntas === 'C' ){

                perguntas = Number ( )
                    
                return saldo
            }

            else if ( perguntas > 0 ){
                
                let conta = saldo + perguntas

                return conta 
            }

            else {

                let invalido = pergunta(`Tentativa invalida, tente novamente!`)

                return invalido
            }
    }
}


export function sacar ( saldo ) {
    let perguntas = pergunta()
    let continuar  = true

    perguntas = pergunta(`
        Digite o valor que deseja sacar
        ( Digite C se deseja cancelar essa ação )
        `)

            if ( perguntas === 'C' ){

                perguntas = Number ( )
                    
                return saldo
            }

            else if ( perguntas > 0 && perguntas <= saldo){
                
                let conta = saldo - perguntas

                return conta 
            }

            else {

                let invalido = pergunta(`Tentativa invalida, tente novamente!`)

                return invalido
            }
}


export function ExibirSaldo ( saldo ) {
    return console.log(`Seu saldo atual é: R$ ${saldo}`)
}

 export function investimento(saldo){

    let juros = pergunta(`
        Digite o Juros:
        ( Digite C se deseja cancelar essa ação )
    
    `)

    let tempo = pergunta(`
        Digite o tempo de investimento:
        ( Digite C se deseja cancelar essa ação )
    
    `)

    let capital = pergunta(`
        Digite o Capital Inicial:
        ( Digite C se deseja cancelar essa ação ) `)
    
        if (juros === "c" && tempo === "c" && capital === "c" ){
            return saldo;

        } 

    tempo = Number(tempo);
    juros = Number(juros);
    capital = Number(capital);
    
        if ( tempo > 0 && juros > 0 && capital > 0 ) {
            let taxajuros = juros / 100;
            let conta = capital * ((1 + taxajuros)** tempo);
            return conta

        }

        else {
            return console.log('Valor inválido. Tente novamente.');

        }   
 }





















