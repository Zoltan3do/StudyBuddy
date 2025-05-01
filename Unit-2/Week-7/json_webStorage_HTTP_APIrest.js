// JSON.stringify / JSON.parse
const user = { nome: "Alice", eta: 30 };
const json = JSON.stringify(user); // da oggetto a stringa JSON
console.log(json);

// Salvare nel Web Storage
localStorage.setItem("utente", json);

// Leggere e parsare
const jsonLetto = localStorage.getItem("utente");
const utente = JSON.parse(jsonLetto);
console.log(utente.nome); // Output: Alice
