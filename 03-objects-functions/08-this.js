
/*

  Kod stvaranja, unatar samog EC-a stvaraju se okruženje za varijable, referenca na vanjska okruženja, i ključna riječ this.

  This je referenca na određeni objekt, ovisno o kontekstu.

*/

// U globalnom kontekstu, referenca je na globalni objekt (Window u browseru).
console.log( this );

// Kod deklaracije funkcija, također je referenca na globalni objekt.
function nekaFunkcija() {
  console.log( this );
}

nekaFunkcija();

// Unutar metode objekta, referenca je na objekt čija je metoda.
var osoba = {

  ime: 'Ivan',
  ivanFunkcija: function() {
    console.log( this );
  }

};

osoba.ivanFunkcija();

// Kod funkcije koja je napisana UNUTAR metode, referenca pokazuje na GLOBALNI objekt
var drugaOsoba = {

  ime: 'Goran',
  goranFunkcija: function() {
    
    console.log( this );
    
    function unutarnjaFunkcija() {
      console.log( this );
    }
    unutarnjaFunkcija();

  }

};

drugaOsoba.goranFunkcija();
