
/*

  Immediately Invoked Function Expression (IIFE) je funkcija kao izraz koja se poziva odmah u trenutku kada je i stvorena.

  To je zato što kao izraz, ona vraća neku vrijednost, a ta vrijednost je funkcija kao objekt. Onda tu funkciju možemo odmah i pozvati.

*/

// Najprije imamo deklaraciju funkcije
function pozdrav( ime ) {
  console.log( 'Pozdrav ' + ime );
}

pozdrav( 'Ivan' );

// Onda imamo funkciju kao izraz - u varijablu se posprema objekt funkcija
var pozdrav2 = function( ime ) {
  console.log( 'Pozdrav ' + ime );
};

pozdrav2( 'Ivan' );

// Svaka funkcija ima svojstvo CODE koje se može pozvati sa zagradama. U ovom slučaju dobivamo IIFE - pozivamo ju odmah nakon stvaranja
var pozdrav3 = function( ime ) {
  return 'Pozdrav ' + ime;
}();

// Sada ova varijabla sadržava vrijednost koju vraća funkcija zbog toga što smo funkciju odmah i pozvali.
console.log( pozdrav3 );

// Takvoj funkciji možemo odmah prosljediti i argumente
var pozdrav4 = function( ime ) {
  return 'Pozdrav ' + ime;
}( 'Ivan' );

console.log( pozdrav4 );

// U JS-u izrazi mogu stajati sami za sebe. Iako to izgleda čudno (jer se nigdje ne spremaju), to je potpuno ispravan kod.
3;
'Ja sam string';
{
  ime: 'Ivan'
};

// Na isti način možemo pisati i funkcije kao izraze. Jedino dodatno što moramo učiniti je omotati ih u zagrade. Kada to ne bi učinili, parser bi javio grešku zato što bi očekivao deklaraciju funkcije (očekivao bi ime). Međutim, ako anonimnu funkciju omotamo u zagrade, parser će očekivati izraz, jer zagrade UVIJEK vraćaju neki izraz - npr (3+4)*5, if (...) {}.
(function( ime ) {
  console.log( 'Pozdrav ' + ime ); 
});

// Takvu funkciju koja "lebdi" (nigdje nije spremljena), možemo odmah i pozvati. Zagradu pozivanja možemo staviti unutar ili izvan prvih zagrada, svejedno je.
(function( ime ) {
  console.log( 'Pozdrav ' + ime ); 
}( 'Ivan' ));


