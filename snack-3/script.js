const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

console.log("-".repeat(50));

const newNum = numbers.map(item => item+1)
console.log(newNum);