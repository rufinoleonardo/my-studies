/** CEP (or Código Postal) is the brasilian 'Zip Code'. It consist of 8 numbers.
 *  logradouro = street / avenue
 *  localidade = city
 *  uf (unidade federativa) = State  
 */

const $cep = document.querySelector('#inputCEP')

$cep.addEventListener("input", function (e){
    let cep = this.value
    cep = cep.replace(/[^0-9]/g, "")
    if (cep.length == 8){
        const promise = getAdress(cep)
            .then(dado => {
                console.log('sucesso')
                if(dado.erro) throw Error('CEP inexistente')
                showAdress(dado)
            })
            .catch( err => {
                console.log('erro')
                console.log(err.message)
                showError(err.message);
            })
    }
})

function getAdress(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    return fetch(url)
        .then(resp =>{
            if(!resp.ok) throw Error('CEP Inválido')
            return resp
        })
        .then(resp => resp.json())
}

function showAdress(dados){
    document.querySelector("#inputLogradouro").value = dados.logradouro
    document.querySelector("#inputBairro").value = dados.bairro
    document.querySelector("#inputCidade").value = dados.localidade
    document.querySelector("#inputEstado").value = dados.uf
}

function showError(msg){
    document.querySelector('#bs-feedback .content').textContent = msg
    document.querySelector('#bs-feedback').style.transform= "translateY(0)"
}

document.querySelector("#bs-feedback").addEventListener("click", function(){
    hideError()
})

function hideError(){
    document.querySelector('#bs-feedback').removeAttribute("style")
}