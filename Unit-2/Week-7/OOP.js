// Definizione di una classe
class Animale {
  constructor(nome) {
    this.nome = nome;
  }

  verso() {
    console.log(`${this.nome} fa un suono`);
  }
}

// Estensione della classe
class Cane extends Animale {
  verso() {
    console.log(`${this.nome} abbaia`);
  }
}

// Uso
const fido = new Cane("Fido");
fido.verso(); // Output: Fido abbaia
