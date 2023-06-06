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
            
            inserirProtocolo.appendChild(paragrafo);

            inserirProtocolo.appendChild(protocoloInput);
        }
    }

    function removerInput(e){
        e.preventDefault();

        const elemento = document.querySelector('#protocolo-opa');
        
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
          }
    }

    btnOpa.addEventListener('click', function(e){
        const valorOpa = obterValorOpa();
        console.log(valorOpa);
    })

    btnRamal.addEventListener('click', function(e){
        const valorRamal = obterValorRamal();
        console.log(valorRamal);
    })

    function obterValorOpa(){
        return "OPA"
    }

    function obterValorRamal(){
        return "Ramal"
    }

    
    const form = document.querySelector('#infos-contato');

    form.addEventListener('submit', coletarInfos);

    infosColetadas = [];

    function coletarInfos(e){
        e.preventDefault();

        const contratoInfo = form.querySelector('#contrato-cliente');
        const contanteInfo = form.querySelector('#contatante');
        const telefoneInfo = form.querySelector('#telefone');

        infosColetadas.push({
            contratoCliente: contratoInfo.value,
            contato: contanteInfo.value,
            telefone: telefoneInfo.value
        })
    }

}

app();