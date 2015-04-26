
/*

  U programiranju, namespace je pojam za kontejner koji sadrži varijable i funkcije.

  U Javascriptu ne postoji namespace kao takav. Kako bi izolirali varijable i funkcije u različite grupe (kontejnere), koristimo objekte.

*/

// Na 2 različita mjesta (u 2 različite datoteke) deklariramo varijablu sa istim imenom
var pozdrav = 'Dobar dan!';
var pozdrav = 'Good day!';

// Zadnja vrijednost će pobrisati prvu, i prva vrijednost će se izgubiti
console.log( pozdrav );

// To možemo riješiti tako da napravimo različite kontejnere (namespace) za ove varijable
var hrvatski = {

  pozdrav: 'Dobar dan!'

};

var engleski = {

  pozdrav: 'Good day!';

};

console.log( hrvatski.pozdrav );
console.log( engleski.pozdrav );