

function app() {

    const btnOpa = document.querySelector('#opcao-opa');
    const btnRamal = document.querySelector('#opcao-ramal');
    
    btnOpa.addEventListener('click', inserirInput);
    btnRamal.addEventListener('click', removerInput);

    function inserirInput(e){
        e.preventDefault();

        if(!document.getElementById('protocolo-input')){

            const inserirProtocolo = document.querySelector('#protocolo-opa');

            const protocoloInput = document.createElement('input');

            const paragrafo = document.createElement('p');

            protocoloInput.setAttribute('type', 'number');
            protocoloInput.setAttribute('id', 'protocolo-input');

            protocoloInput.placeholder = "Informe o protocolo";

            paragrafo.innerHTML = 'Protocolo:';

            inserirProtocolo.appendChild(protocoloInput);
            
            inserirProtocolo.appendChild(paragrafo);
            
        }
    }

    function removerInput(e){
        e.preventDefault();

        const elemento = document.querySelector('#protocolo-opa');
        
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
          }
    }

    const form = document.querySelector('#infos-contato');

            form.addEventListener('submit', coletarInfos);

            infosColetadas = [];

            function coletarInfos(e){
                e.preventDefault();

                const contratoInfo = form.querySelector('#contrato-cliente');
                const contatanteInfo = form.querySelector('#contatante');
                const telefoneInfo = form.querySelector('#telefone');

                infosColetadas.push({
                    contratoInfo: contratoInfo.value,
                    contatanteInfo: contatanteInfo.value,
                    telefoneInfo: telefoneInfo.value
                })

                const btnGerarAtendimento = document.querySelector('#gerar-atendimento');

                btnGerarAtendimento.addEventListener('click', criaAtendimento);
            
                function criaAtendimento(e){
                    e.preventDefault();

                    const atendimentoCompleto = document.querySelector('#atendimentoCompleto')

                    if(!document.getElementById('atendimento-gerado')){

                        const atendimentoGerado = document.createElement('div');

                        atendimentoGerado.id = 'atendimento-gerado';
                        
                        atendimentoCompleto.appendChild(atendimentoGerado) ;

                        const assinante = document.createElement('span');

                        atendimentoGerado.appendChild(assinante);

                    }
            
                }

            }


    


}

app();