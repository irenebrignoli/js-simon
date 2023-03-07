/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

const numbersDom = document.getElementById('numbers');
const countdownDom = document.getElementById('countdown');
const endTimeDom = document.getElementById('end-time');
const winOrLoseDom = document.getElementById('win-or-lose');
let arrayNumbers = [];
let arrayUserNumbers = [];

let numbersFound =[];


for(let i = 1; i<=5; i++){

  let number = generateUniqueRandomNumber(arrayNumbers, 1, 50);
  arrayNumbers.push(number);
  
}

console.log(arrayNumbers);
numbersDom.innerHTML = arrayNumbers;

let seconds = 5;

const countdown = setInterval(runCountdown, 1000);

setTimeout(emptyComputerNumbers, 6000);
setTimeout(delayprompt, 7000);






//FUNZIONI


//svuota array computer
function emptyComputerNumbers(){

  numbersDom.innerHTML = "";
  countdownDom.innerHTML = "";
  endTimeDom.innerHTML = "";

}

//confronto degli array
function compareArrays(arr1, arr2){

 //
}


//ritardo prompt
function delayprompt (){

  for(let i = 1; i<=5; i++){
    
    let result = parseInt(prompt('Inserisci i numeri che hai memorizzato, uno alla volta'));
    arrayUserNumbers.push(result);

    if(arrayNumbers.includes(result)){
      numbersFound.push(result);
    }
  }

  console.log(arrayUserNumbers);
  
  winOrLoseDom.innerHTML += numbersFound;

}


//conto alla rovescia
function runCountdown(){

  seconds--;

  if (seconds <= 0){
    clearInterval(countdown);
    endTimeDom.innerHTML = 'Tempo finito!';
  }

 countdownDom.innerHTML = seconds;
}


//genera numero casuale che non si ripete
function generateUniqueRandomNumber(array, min, max){

  let validNumber = false;
  let randomNumber;

  while (!validNumber){
    randomNumber = generateRandomNumber(min, max);
    if (!array.includes(randomNumber)){
      validNumber = true;
    }
  }

  return randomNumber;
}


//genera numero casuale
function generateRandomNumber(min, max){

  const number = Math.floor(Math.random() * (max - min +1)) + min;
  return number;
}

