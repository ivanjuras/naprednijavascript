
/*

  Call, Apply i Bind su tri metode dostupne svakoj funkciji koje mijenjaju vrijednost varijable 'this' unutar same funkcije.

*/

// Najprije imamo neki objekt
var osoba = {

  ime: 'Ivan',
  prezime: 'Juras',
  punoIme: function() {
    var imePrezime = this.ime + ' ' + this.prezime;
    return imePrezime;
  }

};

// Sada napravimo običnu funkciju. Kada bi pozvali samo ovu funkciju dobili bi grešku, zbog toga što metoda punoIme ne postoji na globalnom objektu na koji u ovom slučaju referencira this
function ispisiIme( jezik1, jezik2 ) {

  console.log( 'Ispis: ' + this.punoIme() );
  console.log( 'Argumenti: ' + jezik1 + ', ' + jezik2 );
  console.log( '-------------------------------------' );

}

// Nova funkcija je kopija stare funkcije, a metoda bind na njoj usmjerava 'this' unutar nje na objekt koji je argument (u ovom slučaju - osoba)
var ispisiImeOsobe = ispisiIme.bind( osoba );
ispisiImeOsobe( 'hr' );

// Za razliku of metode bind, call i apply su metode koje NE stvaraju novu kopiju funkcije, već odmah pozivaju funkciju. Prvi argument je uvijek kontekst na koji se 'this' odnosi. Jedina razlika između call i apply metoda je ta da u call normalno prosljeđujemo argumente kao niz (nakon prvog argumenta koji je this objekt), dok apply metoda prima kao drugi parametar polje.
ispisiIme.call( osoba, 'en', 'hr' );
ispisiIme.apply( osoba, [ 'hr', 'en' ] );

// Ove metode mogu biti jako korisne ako želimo npr. posuditi neku metodu objektu koji inače nema pristup toj metodi. Zamislimo da imamo novi objekt osoba2 koji nema pristup metodi punoIme
var osoba2 = {

  ime: 'Maja',
  prezime: 'Majić'

};

// Sada želimo saznati puno ime te osobe. Zovemo metodu iz prve osobe i dodjeljujemo joj this u kontekst druge osobe pomoću metode apply.
console.log( osoba.punoIme.apply( osoba2 ) );

// Također, možemo praviti kopije postojećih funkcija sa time da im postavljamo parametre.
function pomnozi( a, b ) {

  return a * b;

}

// Sada napravimo kopiju čiji će prvi parametar UVIJEK biti 2. This argument dolazi prvi, i njega samo ostavimo kakav je, jer nas ne zanima. Nakon njega slijedi 2, koji je ustvari parametar 'a' gornje funkcije. Sada je u novoj metodi a uvijek 2.
var pomnoziSDva = pomnozi.bind( this, 2);
console.log( pomnoziSDva(3) );

var pomnoziSTri = pomnozi.bind( this, 3 );
console.log( pomnoziSTri(4) );