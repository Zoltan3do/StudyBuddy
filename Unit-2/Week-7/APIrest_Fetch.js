// Richiesta GET a un'API pubblica
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // converte la risposta in JSON
  .then((data) => {
    console.log("Titolo:", data.title);
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });
