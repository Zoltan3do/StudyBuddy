document.getElementById("changeColor").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("changeColor").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "yellow";
});

document.getElementById("login").addEventListener("submit", function (event) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email.includes("@") || password.length < 8) {
    event.preventDefault();
    document.getElementById("error").textContent =
      "Email o password non validi!";
  } else {
    alert("Form inviato!");
  }
});

document.getElementById("showInfo").addEventListener("click", function () {
  let info = "Browser: " + window.navigator.userAgent + "<br>";
  info += "Lingua: " + window.navigator.language + "<br>";
  info += "URL attuale: " + window.location.href;
  document.getElementById("infoBrowser").innerHTML = info;
});

const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = "lorem ipsum"

const parent = document.getElementById("parent");
parent.appendChild(nuovoParagrafo);

parent.querySelectorAll("p")[2].style.color= "red"

