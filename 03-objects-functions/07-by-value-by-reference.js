
/*

  Primitivni tipovi se prenose po vrijednosti (pass by value), što znači da ako novoj varijabli pridodajemo vrijednost stare varijable koja sadrži primitivni tip, nova varijabla će sadržavati novu referencu na novo mjesto u memoriji u kojem je kopija vrijednosti iz stare varijable.

  Ovo isto vrijedi i za prosljeđivanje u funkciju.

  Za razliku od toga, referentni tipovi ( u JS-u to su objekti i sve podvrste objekata kao npr funkcije, polja itd..) prenose se po referenci (pass by reference), što znači da se u novu varijablu kopira samo ista referenca.

  Ta referenca ipak pokazuje na ISTI objekt u memoriji.

  Isto vrijedo i za prosljeđivanje referentnih tipova u funkciju.

*/

// Po vrijednosti
var a = 10,
    b = a;

a = 20;

console.log( a );
console.log( b );

// Po vrijednosti kod funkcija
function dodaj1( a ) {
  a += 1;
  console.log( a );
}

var a = 5;

dodaj1( a );
console.log( a );

// Po referenci
var osoba1 = {
  ime: 'Ivan'
};

var osoba2 = osoba1;

osoba1.ime = 'Goran';

console.log( osoba1 );
console.log( osoba2 );

// Po referenci kod funkcija
function promjeniPozdrav( objekt ) {
  objekt.pozdrav = 'Hello!';
}

var pozdrav1 = {
  pozdrav: 'Pozdrav!'
};

var pozdrav2 = pozdrav1;

promjeniPozdrav( pozdrav2 );
console.log( pozdrav1 );
console.log( pozdrav1 );

// Ako znakom jednakosti varijabli pridružimo novi objekt (bez da joj pridružujemo staru varijablu), napravit će se novi objekt u memoriji, makar on bio isti

pozdrav1 = {
  pozdrav: 'Pozdrav1'
};

console.log( pozdrav1 );
console.log( pozdrav2 );