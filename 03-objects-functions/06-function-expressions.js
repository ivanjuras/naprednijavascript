
/*

  U programiranju "izraz" (expression) je pojam koji opisuje dio koda koji rezultira nekim rezultatom.

  Funckije možemo pisati kao izjave (normalna deklaracija) ili kao izraze.

*/

var a = 2;

// 1 + 2 je izraz jer vraća neku vrijednost (3)
console.log( 1 + 2 );

// a === 3 je također izraz jer vraća vrijednost (npr false).
// Međutim, if nije izraz, već izjava; if ne vraća nikakvu vrijednost.
if ( a === 3 ) {

  //....neki kod

}

// Funkcije kao deklaracije mogu se pozivati prije nego što smo ih napisali u kodu, iz razloga što se za vrijeme faze stvaranja EC-a za ovako deklarirane funkcije zauzima potpuni prostor.
pozdrav1();

function pozdrav1() {
  console.log( 'Pozdrav 1' );
}

// U ovom slučaju imamo funkciju kao izraz (vraća objekt - funkciju) koja se pridodaje varijabli. Sada funkciju ne možemo pozvati prije nego što smo ju napisali zato što se u fazi stvaranja EC-a sve varijable stavljaju na vrh i najprije im se dodjeljuje vrijednost 'undefined'. Tek u fazi izvršenja varijable se pune pravim vrijednostima (u ovom slučaju objektom koji je funkcija)
var pozdrav2 = function() {
  console.log( 'Pozdrav 2' );
}

// Svojstvo NAME kod ove funkcije je prazno, ali se na CODE pozivamo referencom koja je pospremljena u samoj varijabli.
pozdrav2();

// Pošto su funkcije samo specijalni tip objekta, i njih također možemo proslijeđivati u druge funkcije
function ispisi( a ) {
  console.log( a );
}

ispisi( function() {
  console.log( 'Ovo je moja funkcija koju prosljedujem' );
});