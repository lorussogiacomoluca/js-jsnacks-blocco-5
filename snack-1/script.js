const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

console.log("-".repeat(50));
//for
for(let i = 0; i < names.length; i++)
    console.log(names[i]);

console.log("-".repeat(50));
//forEach
names.forEach(item => console.log(item))
