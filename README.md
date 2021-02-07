# PROGETTO PROGETTAZIONE APPLICAZIONI WEB E MOBILI
 Progetto per l'esame di progettazione applicazioni web e mobili
RELAZIONE PROGETTO PROGETTAZIONE DI APPLICAZIONI WEB E MOBILI DI AGOSTINELLI ANDREA E SHQEFANAKU KRISTIAN

NOME DEL PROGETTO: APP CO2

INTRODUZIONE
Il progetto APP CO2 ci è stato assegnato da un nostro amico e collega che lavorava per un’azienda la quale aveva bisogno di una web app per il controllo delle varie emissioni e consumi energetici delle proprie macchine. 
Dunque, ciò che abbiamo sviluppato è un applicativo web in Single Page Application che mostra i diversi tipi di consumi e lavori delle macchine attraverso dei grafici.
TECNOLOGIE SCELTE
Frontend
•	Lo scheletro del programma è il framework Angular, che abbiamo utilizzato per creare una SPA in modo più semplice ed efficace.
•	Abbiamo utilizzato l’architettura Node.js e il packet manager NPM.
•	Per quanto riguarda la struttura delle pagine abbiamo utilizzato HTML, CSS e qualche sezione in SCSS servendoci della libreria Bootstrap.
•	I grafici sono stati realizzati attraverso la libreria Chartjs.
Backend
Il back-end è un applicativo che ascoltando in una porta in locale, controlla le autorizzazioni per le chiamate ed eventualmente risponde con l'array di dati richiesti dall'utente.
Il controllo delle autorizzazioni avviene attraverso un token jwt che viene creato attraverso un algoritmo di cripting e che viene ritornato in risposta all'utente quando esegue con successo l'autenticazione.
Attraverso questo token l'utente potrà accedere a tutti servizi fintanto che il token rimane valido. 
Il database utilizzato è mongoDb, in quanto abbiamo una grande mole di dati, ma con richieste molto semplici da fare. 

CASI D’USO
Il caso d’uso principale è:
l’azienda effettua il login nel nostro portale con previa registrazione concordata con noi. Effettuato il login l’azienda potrà accedere a tutti i grafici dei macchinari collegati al database e visualizzare i dati in tempo reale.
Alla fine, il cliente potrà eseguire il logout.
FUTURI SVILUPPI
I dati che abbiamo ricevuto sono solo una piccola parte dei dati che un’azienda deve monitorare e mostrare. 
Ma nonostante questo siamo pronti ad aggiungere ogni tipo di macchinario, in quanto basterebbe creare e aggiungere la componente al front-end e aggiungere i dati al backend, in questo modo l'applicazione è sempre pronta ad essere ampliata. Al momento l'applicativo è una web app, ma potrebbe anche diventare un applicativo da installare nell'azienda e costruito su misura per la stessa.
In questo caso un possibile futuro sviluppo è quello di dividere il login in diversi ruoli e mostrare in base al ruolo i relativi macchinari e grafici.
