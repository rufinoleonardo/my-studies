# Step by step

Object with server conection
> Instanciate an obj
> open()
> send()
> Listener

## onreadystatechange
* 0 - connessione non aviata
* 1 - richiesta configurata
* 2 - richiesta enviata
* 3 - in lavorazione
* 4 - risposta ricevuta (completa: sucesso o fallimento)

## Status
CODICE | SIGNIFICATO
:-----:| :----------
200 | Successo
304 | In cache

## Commenti

> L'API È un'interfaccia che restituisce i dati (di solito in formato JSON) dal server.

> URI e URL sono fondamentalmente la stessa cosa.

# Get or Post
TERMINE | UTILIZZAZIONE
:-----: | :------------
GET | quando si vuole recuperara i dati dal server.
POST | viene utilizzato per inviare dati
PUT | A RIEMPIRE
PATCH | 
DELETE | 
OPTIONS |


Tutte le volte che bisognerò exeguire un AJAX/HttpRequest ho bisogno di utilizzare un server http
 - CHAMP
 - EXPRESS
 - HTPPSERVER ...

> vale la pena ricordare che la response restituita dall'oggetto instanziato è un testo e deve essere PARSEato in JSON