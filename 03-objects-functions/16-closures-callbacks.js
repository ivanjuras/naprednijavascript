
/*

  Closures možemo kombinirati sa callback funkcijama.

  Callback funkcije su funkcije prosljeđujemo drugim funkcijama da ih da druga funkcija izvrši pri svome završetku.

*/

// Imamo funkciju koja ispisuje pozdrav nakon 3 sekunde
function pozdraviKasnije() {

  var pozdrav = 'Pozdrav!';

  // setTimeout je ugrađena funkcija koja prima funkciju koja će se izvršiti nakon nekog vremena, i broj u milisekundama koji označava to vrijeme
  setTimeout( function() {
    console.log( pozdrav );
  },3000 );

}

// Sada pozivamo vanjsku funkciju. EC vanjske funkcije je završio puno prije od 3 sekunde nakon koliko se poziva unutrašnja funkcija, ali ta unutrašnja funkcija ipak i dalje vidi varijablu vanjske funkcije
pozdraviKasnije();

// Callback funkcija je jednostavno funkcijy koju šaljemo kao argument u neku drugu funkciju, i ta druga funkcija poziva prvu funkciju kada završi sa svojim poslom
function reciKadSiGotov( callbackFunkcija ) {

  var a = 10; // Neki posao
  var b = 20; // Neki drugi posao

  callbackFunkcija();

}

// Ta funkcija pri pozivu prima drugu funkciju koja će se izvršiti na kraju ove prve
reciKadSiGotov(function() {
  console.log( 'Gotova sam!' );
});

reciKadSiGotov(function() {
  alert( 'Gotova saaam...' );
});

