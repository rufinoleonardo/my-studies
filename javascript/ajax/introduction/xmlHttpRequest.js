/** Tutte le volte che bisognerò exeguire un AJAX/HttpRequest ho bisogno di utilizzare un server http
 * CHAMP
 * EXPRESS
 * HTPPSERVER ...
 */

function createXMLHttpRequest(method, url, cb, data=null) {
    // instanziando l'oggetto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // aprendo la connessione
    xhr.open(method, url);

    // inviando la conessione
    xhr.send(data) //non sto a inviare niente

    // listenig lo status della richiesta
    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                const json = JSON.parse(xhr.responseText)
                
                if( typeof cb === 'function'){
                    cb(json)
                }
            } else if(typeof cb === "function"){
                cb({
                    status: xhr.status,
                    message: 'algo deu errado com essa conexao'
                })
            }
        }
    }
}