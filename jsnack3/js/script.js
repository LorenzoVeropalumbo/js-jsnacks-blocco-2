// Variabili del for
let userNumberFor;
let sum = 0;

// Chiedo i numeri all'utente
for (let i = 0; i < 5; i++) {
  userNumberFor = parseInt(prompt('dimmi un numero'));
  sum += userNumberFor;
}
// Stampo la somma
console.log(sum);

// -------------------------------------------------------------
// Variabili del while
let j = 0;
let sum2 = 0;
let userNumberWhile;

// Chiedo i numeri all'utente
while(j < 5) {
  
  userNumberWhile = parseInt(prompt('dimmi un numero'));
  sum2 += userNumberWhile;
  j++;
}

// Stampo la somma
console.log(sum2);
