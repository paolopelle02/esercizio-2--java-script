function findLargestNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}


console.log(findLargestNumber(20, 5)); // Output: 20(num1 è maggiore di num2)
console.log(findLargestNumber(5, 9)); // Output: 5 (num2 è maggiore di num1)
console.log(findLargestNumber(2, 2)); // Output: 2 (i numeri sono uguali)
//esercizio 2
function checkNotEqual(number) {
  if (number !== 5) {
    console.log('not equal');
  }
}

checkNotEqual(6); // Stampa 'not equal' 
checkNotEqual(5); // Non stampa nulla perché 5 non è diverso da 5

function checkDivisibleBy5(number) {
  if (number % 5 === 0) {
    console.log('divisibile per 5');
  }
}

checkDivisibleBy5(10); // Stampa 'divisibile per 5' perché 10 è divisibile per 5
checkDivisibleBy5(7); // Non stampa nulla perché 7 non è divisibile per 5

function checkFor8OrSum(number1, number2) {
  if (number1 === 8 || number2 === 8 || number1 + number2 === 8 || number1 - number2 === 8) {
    console.log('Valore 8 o addizione/sottrazione uguale a 8');
  }
}

checkFor8OrSum(4, 8); // Stampa 'Valore 8 o addizione/sottrazione uguale a 8' perché uno dei numeri è 8
checkFor8OrSum(2, 6); // Stampa 'Valore 8 o addizione/sottrazione uguale a 8' perché la loro somma è 8
checkFor8OrSum(10, 3); // Non stampa nulla 

function checkFor8OrSum(number1, number2) {
  if (number1 === 8 || number2 === 8 || number1 + number2 === 8 || number1 - number2 === 8) {
    console.log('Valore 8 o addizione/sottrazione uguale a 8');
  }
}

checkFor8OrSum(4, 8); // Stampa 'Valore 8 o addizione/sottrazione uguale a 8' perché uno dei numeri è 8
checkFor8OrSum(2, 6); // Stampa 'Valore 8 o addizione/sottrazione uguale a 8' perché la loro somma è 8
checkFor8OrSum(10, 3); // Non stampa nulla perché nessuna delle condizioni è soddisfatta


function calculateTotalWithShipping(totalShoppingCart) {
  if (totalShoppingCart > 50) {
    console.log('Totale da addebitare:', totalShoppingCart);
  } else {
    console.log('Totale da addebitare:', totalShoppingCart + 10);
  }
}

calculateTotalWithShipping(40); // Totale da addebitare: 50 (spedizione inclusa)
calculateTotalWithShipping(70); // Totale da addebitare: 70 (spedizione gratuita)

let num1 = 25;
let num2 = 10;
let num3 = 50;

let numbersArray = [num1, num2, num3];
numbersArray.sort((a, b) => b - a);
console.log('Numeri ordinati:', numbersArray);

function checkIfNumber(value) {
  if (typeof value === 'number') {
    console.log('È un numero');
  } else {
    console.log('Non è un numero');
  }
}

checkIfNumber(5); // Output: È un numero
checkIfNumber('Paolo'); // Output: Non è un numero
checkIfNumber(true); // Output: Non è un numero
checkIfNumber(null); // Output: Non è un numero
checkIfNumber(undefined); // Output: Non è un numero


function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('Pari');
  } else {
    console.log('Dispari');
  }
}

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('Pari');
  } else {
    console.log('Dispari');
  }
}

checkEvenOrOdd(8); // Output: Pari
checkEvenOrOdd(3); // Output: Dispari
checkEvenOrOdd(0); // Output: Pari
checkEvenOrOdd(-7); // Output: Dispari
checkEvenOrOdd(16); // Output: Pari

  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
// Esercizio 11
me.city = 'Toronto';
console.log(me);

// Esercizio 12
delete me.lastName;
console.log(me);

// Esercizio 13
me.skills.pop();
console.log(me.skills);

