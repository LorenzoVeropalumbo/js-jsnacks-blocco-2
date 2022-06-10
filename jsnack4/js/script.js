// creazione array
const largeArrey = [1,2,3,4,5,6,7,8,9,10,11,12]
const smallArrey = [1,2,3,4,5]

// calcolo del ciclo
while(smallArrey.length < largeArrey.length) {
  let randomvalue = Math.floor(Math.random() * 100) + 1;
  smallArrey.push(randomvalue);
}

// printo gli array
console.log(largeArrey)
console.log(smallArrey)
