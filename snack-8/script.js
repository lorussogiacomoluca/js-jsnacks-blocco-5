const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

console.log("-".repeat(50));
const findClass = (array, name) =>{
  const foundPerson = array.find(item => item.name == name)
  return foundPerson.class
}

const marcoLanci = findClass(students, 'Marco Lanci')
console.log(marcoLanci);