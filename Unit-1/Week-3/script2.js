let padre = document.getElementById("padre");

let form = document.createElement("form")
padre.appendChild(form)

let p = document.createElement("p");
p.innerText = "clicca sul bottone"
let button = document.createElement("button")
button.type = "submit";
button.innerText = "cliccami"
form.appendChild(p)
form.appendChild(button)