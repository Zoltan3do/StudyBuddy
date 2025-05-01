// Funzione asincrona con await
async function caricaPost() {
  try {
    const risposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    const dati = await risposta.json();
    console.log("Post:", dati.title);
  } catch (errore) {
    console.error("Errore:", errore);
  }
}

caricaPost();
