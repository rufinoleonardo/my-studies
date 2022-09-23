// instanziando l'oggetto XMLHttpRequest
const xhr = new XMLHttpRequest();

// aprendo la connessione
xhr.open("GET", "dati.json");

// inviando la conessione
xhr.send(null) //non sto a inviare niente

// listenig lo status della richiesta
xhr.onreadystatechange = verificaAjax

function verificaAjax(){  
    if( xhr.readyState === 4){
        if(xhr.status === 200 || xhr.status === 304){
            console.log(xhr.responseText)
            const json = JSON.parse(xhr.responseText)
            console.log(json[0])
        }
    }
}

/** Tutte le volte che bisognerò exeguire un AJAX/HttpRequest ho bisogno di utilizzare un server http
 * CHAMP
 * EXPRESS
 * HTPPSERVER ...
 */