
/*

  JSON - Javascript Object Notation. Način za prenošenje podataka. Zamjenio je stariji način, prenošenje pomoću XML-a.

  Svojstva moraju biti omotana u dvostruke navodnike.

  JSON je ustvari podvrsta literlanog objekta (jer ima stroža pravila).

*/

// Ovo je objekt literal
var objektLiteral = {

  ime: 'Ivan',
  jeProgramer: true

};

// Pretvori objekt u JSON string
var jsonObjekt = JSON.stringify( objektLiteral );
console.log( jsonObjekt );

// Pretvori JSON u JS objekt
var praviObjekt = JSON.parse( '{ "ime": "Ivan", "jeProgramer": true }' );
console.log( praviObjekt );