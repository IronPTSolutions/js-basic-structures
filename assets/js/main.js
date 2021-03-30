console.log('---- JS Arrays & Objects ----');

const name = 'John';
const lastName = 'Doe';
console.log(`Hi, I'm ${name} ${lastName}`)

/** Objetos: JSONs: https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
 * - Agrupan un conjunto de variables que dan forma a un concepto.
 * - También llamados mapas/diccionarios
 * - Los atributos/claves son siempre strings y el valor de la clave puede ser
 *   de cualquier tipo (string, number, boolean, array, function, object...)
*/
const user = {
  name: 'John',
  lastName: 'Doe',
  age: 30,
  isAdmin: true,
  skills: ['js', 'css', 'html']
}
console.log('User:', user);

// Acceso a los atributos utilizando la notación del punto: user.nombreAtributo
console.log('Dot notation:', `Hi, I'm ${user.name} ${user.lastName}`);

// Acceso a los atributos utilizando la notación de array: user['nombreAtributo']
console.log('Array notation:', `Hi, I'm ${user['name']} ${user['lastName']}`);

// Se pueden añadir atributos dinamicamente: user.nombreNuevoAtributo = valor;
user.email = 'john.doe@example.org';
console.log('User:', user);

function greet(user) {
  return `Hello ${fullName(user)}!`
}

function fullName(user) {
  return `${user.name} ${user.lastName}`;
}

console.log('Greet:', greet(user));

/** Arrays */

const users = [
  {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    isAdmin: false,
    skills: ['js', 'css', 'html']
  },
  {
    name: 'Tomothy',
    lastName: 'Simmmons',
    age: 27,
    isAdmin: false,
    skills: ['html']
  }
]

function generateEmails(users) {
  // los objetos y el array se guardan en memoria, cuando modificamos uno de sus atributos
  // lo estamos cambiando directamente en memoria.
  for (let user of users) {
    user.email = buildUserEmail(user);
  }
}

function buildUserEmail(user) {
  return `${user.name}.${user.lastName}@example.org`.toLowerCase();
}

console.log('Users without emails', users);
generateEmails(users);
console.log('Users with emails', users);

const admin = {
  name: 'Miriam',
  lastName: 'Fuller',
  email: 'miriam.fuller@example.org',
  age: 32,
  isAdmin: true,
  skills: ['js', 'css']
}
users.push(admin);
console.log('Users with an admin:', users);


function findAdmin(users) {
  let admin;
  let i = 0;
  while (!admin && i < users.length) {
    const user = users[i];
    if (user.isAdmin) {
      admin = user;
    }
    i++;
  }
  return admin;
}
console.log('The admin is:', findAdmin(users));


function printUsers(users) {
  console.log('Users in the system:')
  for (let user of users) {
    console.log(`- ${fullName(user)} (${user.email})`)
  }
}

printUsers(users);


function getRandomUser(users) {
  const index = Math.floor(Math.random() * users.length);
  return users[index];
}

console.log('Random user:', getRandomUser(users));


// for of: itera los valores de un array directamente,
// omitimos el índice xq no lo necesitamos
for (const user of users) {
  console.log('of', user);
}

// for in: itera los índices de un array (o un objeto)
// con arrays
for (const i in users) {
  console.log('in', i);
}

// con objectos
for (const attrKey in user) {
  console.log('attr key:', attrKey);
}
