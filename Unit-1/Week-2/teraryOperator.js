// ESERCIZIO 5
// Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".

// C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita
// (altrimenti la spedizione ha un costo fisso pari a 10).

// Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

let totalShoppingCart = 49;
let spedizione = totalShoppingCart > 50 ? 0 : 10;
let totaleDaPagare = totalShoppingCart + spedizione;

// if (totalShoppingCart > 50) {
//   spedizione = 0;
// }

console.log("Totale: " + totaleDaPagare);
