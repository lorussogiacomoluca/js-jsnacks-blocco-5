const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
console.log("-".repeat(50));
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

console.log("-".repeat(50));
people.forEach(item => console.log(item.name))