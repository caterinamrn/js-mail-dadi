
var giocaBtn = document.getElementById('giocabtn');

 // giocaBtn.addEventListener("click", function() {
 //   var num1 = Math.floor( Math.random()* 6 + 1 );
 //   var num2 = Math.floor( Math.random()* 6 + 1 );
 //   console.log(num1, num2);
 //   if (num1 > num2) {
 //    document.getElementById('risultato').innerHTML = " Hai vinto! "
 //  }
 //  else if (num1 < num2) {
 //    document.getElementById('risultato').innerHTML = " Hai Perso! "
 //  }
 //  else {
 //    document.getElementById('risultato').innerHTML = " La partita è finita in pareggio ";
 //  }
 // });
 
 // prova con for: meglio dei tre
 var dadoComputer;
 var dadoUtente;
giocaBtn.addEventListener("click", function() {
  for (var i = 0; i < 3; i++) {
    dadoComputer = Math.floor( Math.random()* 6 + 1 );
    dadoUtente = Math.floor( Math.random()* 6 + 1 );

    if (dadoComputer > dadoUtente) {
     console.log("Hai vinto!");
   }
   else if (dadoComputer < dadoUtente) {
     console.log(" Hai Perso! ");
   }
   else {
     console.log(" La partita è finita in pareggio "); }
  }

});
