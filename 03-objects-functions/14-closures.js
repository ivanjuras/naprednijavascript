
/*

  JS engine se brine za to da sve varijable koje su potrebne određenoj funkciji uvijek i budu dostupne toj funkciji, bez obzira na to što se dogodilo sa vanjskim EC-om.

  Kao rezultat toga, ako funkciju napravimo unutar druge funkcije, ova prva funkcija imat će pristup svim varijablama vanjske funkcije čak i kada EC vanjske funkcije prestane postojati.

  Ove unutarnje funkcije zovu se closures (zatvarajuće funkcije) zbog toga što one oko sebe "omotavaju", "zatvaraju" sve vanjske varijable koje su im potrebne, bez obzira na to što je EC vanjske funkcije prestao postojati (završio je).

*/

// Najprije imamo vanjsku funkciju koja kao rezultat vraća funkciju.
function pozdravi( stoReci ) {

  return function( ime ) {
    console.log( stoReci + ' ' + ime );
  }

}

// Nova varijabla koja vraća funkciju
var reciBok = pozdravi( 'Bok' );

// Poziv nove funkcije. Ova funkcija "vidi" varijablu vanjske funkcije, iako je vanjska funkcija završila sa svojim izvršavanjem.
reciBok( 'Ivan' );


//  ---------------------------------------------------------------------------------- //


// Malo kompliciraniji primjer; napravimo funkciju koja vraća polje koje sadrži nekoliko funkcija
function napraviFunkcije() {

  var polje = [];

  // U polje guramo 3 funkcije, od kojih svaka ispisuje vrijednost od i
  for ( var i = 0; i < 3; i += 1 ) {
  
    polje.push(
      function () {
        console.log( i );
      }
    );
  
  }

  // Vraćamo polje kao rezultat funkcije
  return polje;

}

// Preuzimamo vrijednost funkcije (a to je novo polje sa funkcijama) u novu varijablu "funkcije"
var funkcije = napraviFunkcije();

// Pozivamo funkcije unutar polja. Zašto se ispisuje 3 svaki puta? Moramo zapamtiti da kada smo gurali funkcije u polje, nismo ih pozivali, već smo ih samo stvarali. Sada kada svaka pojedinačna funkcija pri svom pozivu počne tražiti vanjske varijable, vrijednost varijable i je 3, zbog toga što je to bila vrijednost kada je vanjska funkcija završila sa svojim izvršavanjem (EC se ugasio). Vrijednost od i je upravo ona vrijednost koju i ima u trenutku poziva svake od ovih funkcija.
funkcije[0]();
funkcije[1]();
funkcije[2]();

// Kako ćemo dobiti rezultat da svaka od ovih funkcija ispisuje ono što smo ustvari htjeli (0, 1, 2)? Za svaku funkciju u polju potreban nam je poseban vanjski EC koji će sadržavati upravo tu vrijednost za svaku funkciju u polju. Posebni EC ćemo napraviti tako da svaku od funkcija u polju kod stvaranja umotamo u IIFE (jer svaka IIFE stvara svoj EC).
function napraviFunkcije2() {

  var polje = [];

  for ( var i = 0; i < 3; i += 1 ) {
  
    polje.push(
      // Moramo napraviti posebni EC za svaku funkciju koju želimo gurnuti u polje i proslijediti vanjsku varijablu. Sada IIFE postaje vanjska funkcija za funkciju koju guramo u polje, i kroz svaku iteraciju u for petlji radi se novi vanjski EC koji svaki puta sadrži drugačiju vrijednost.
      (function( i ) {

        return function () {
          console.log( i );
        }
        
      }( i ))
    );
  
  }

  return polje;

}

var funkcije2 = napraviFunkcije2();
funkcije2[0]();
funkcije2[1]();
funkcije2[2]();
