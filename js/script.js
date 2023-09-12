/* 
~~Svolgimento~~
- Creare una lista contente le email gia presenti nel sistema.
- Creare un prompt per far inserire l'email all'utente.
- Assegnare quel valore ad una costante.
- Con un ciclo For vado a confrontare l'email inserita con quelle presenti.
- Con un IF vado ad inserire la condizione che se l'email gia è presente dara un messaggio di errore.
*/
//GENERAL CONST E LET
const emailPresenti = [ 
  'gigi@gmail.com',
  'ugo@gmail.com',
  'ale@gmail.com',
  'marco@gmail.com',
  'elena@gmail.com',
  'marta@gmail.com',
  'max@gmail.com',
];
console.log(emailPresenti);
const nuovaEmail = prompt('Inserisci la tua email');
let emailGiaPresente = false;

//CICLO DI CONTROLLO EMAIL
for (let i = 0; i < emailPresenti.length; i++){
  
  if (nuovaEmail == emailPresenti[i]){
    console.log('errore');
    emailGiaPresente = true;
    alert('Email gia presente nel sistema')
    alert('Inserire una email differente da queste elencate  '+ emailPresenti.join(' -- '))
  }
  
}
//INSERIMENTO IN ARRAY SE NON PRESENTE
if (!emailGiaPresente){
  emailPresenti.push(nuovaEmail)
  console.log(emailPresenti)
  alert('Email registrata con successo')
  alert(emailPresenti.join(' -- '), 'La tua email è quella in fondo')
  
  //ESERCIZIO DADI
  /* 
    ~~Svolgimento~~
    - Creare due variabili con all'interno un generatore di numeri casuali con intervallo 1-6.
    - Comparare i due risultati con un If per decretare il vincitore in base al numero piu alto
  */
  
  let user = Math.ceil(Math.random() * 6);
  console.log(user + ' Risultato utente');
  
  let pc = Math.ceil(Math.random() * 6);
  console.log(pc + ' Risultato pc');
  
  if (user > pc){
    console.log("ha vinto l'utente")
  } else if (user < pc) {
    console.log("ha vinto il pc")
  } else {
    console.log("ha vinto pareggio")
  }
} 
