
var mail = ["lucam@email.com","nomem@email.com", "ffffm@email.com", "aaaam@email.com"];
var utentemail = prompt("inserire la propria mail");
var verifica = false;

for (var i = 0; i < mail.length; i++) {
  if (utentemail == mail[i]) {
    verifica = true;
  }
}
console.log(verifica, utentemail);
 if (verifica == true) {
   document.getElementById("trovata").innerHTML = "la tua mail è presente";
 }
 else {
   document.getElementById("trovata").innerHTML = "la tua mail non è presente";
 }
