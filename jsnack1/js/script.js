const numeberArray = [];
let sum = 0;
let i = 0;

while(sum < 50) {
  
  let userNamber = parseInt(prompt('dimmi un numero'));
  numeberArray.push(userNamber);

  sum += numeberArray[i];
  i++;

  console.log(sum);
  console.log(numeberArray)
}