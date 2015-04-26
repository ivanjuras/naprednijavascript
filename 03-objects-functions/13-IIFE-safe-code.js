
/*

  IIFE nam omogućavaju da zaštitimo svoj kod od varijabli iz drugih EC-eva kako ne bi došlo do poništavanja.

  To je moguće zbog toga što IIFE, pošto je to funkcija, stvara svoj vlastiti EC u vrijeme pozivanja.

*/

// Npr zamislimo da je ovo file1.js
var nesto = 'Ovo je prva varijabla';

// Sada imamo file2.js
(function() {

  var nesto = 'Ovo je druga varijabla';
  console.log( nesto );

}());

// Također, ako nam je potrebno da primimo neke varijable iz vanjskog EC-a, ili da ih tamo pošaljemo, možemo koristiti argumente. Iako je window objekt u ovom slučaju vidljiv iznutra, ipak ga prosljeđujemo kao global varijablu, jer nećemo uvijek raditi u browseru (u kojem je globalni objekt window), već možemo raditi i na serveru (npr Node.js).
(function( global, ime ) {

  var poruka = 'Pozdrav, tvoje ime je ' + ime;
  global.poruka = poruka;

  console.log( poruka );

}( window, 'Ivan' ));

console.log( poruka );