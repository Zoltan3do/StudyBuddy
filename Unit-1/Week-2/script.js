let persona = {
  nome: "Luca",
  eta: 25,
  "lavoro attuale": "Developer",
};

console.log(persona.nome);
console.log(persona["lavoro attuale"]);

persona.nome = "Giovanni";
console.log(persona.nome);

persona.cognome = "Barone";
console.log(persona.cognome);

for (let p in persona) {
  console.log(p + ": " + persona[p]);
}

let numeri = [5, 23, 723, 2345];
console.log(numeri[1]);

numeri.pop()
console.log(numeri)

numeri.push(45)
console.log(numeri)

numeri.shift()
console.log(numeri)

numeri.unshift(1)
console.log(numeri)


for (let i = 0; i < numeri.length; i++) {
  console.log(numeri[i]);
}

