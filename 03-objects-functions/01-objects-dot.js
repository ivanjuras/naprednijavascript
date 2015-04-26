
/*

  Objekti u Javascriptu su jednostavno kolekcije ključeva-vrijednosti (name value pairs).

  Objekt može imati svojstva i metode (properties and methods).

  Svojstva mogu sadržavati primitivne tipove i druge objekte. Metode su funkcije na objektu (isto svojstvo, ali se nazivaju 'metodom').

  Objekt sadržava reference na svoja svojstva i metode.

*/

// stvaramo novi objekt
var osoba = new Object();

// dodajemo svojstvo - objekt dobiva adresu lokacije ovog svojstva u memoriji
osoba['ime'] = 'Ivan';
osoba['prezime'] = 'Juras';

// prednost kod ovakvog zapisivanja je da kao svojstvo možemo postaviti i nekakvu varijablu
var imeSvojstvo = 'ime';

console.log( osoba );
console.log( osoba[imeSvojstvo] );

// Ovaj način dohvaćanja svojstava i metoda sa točkom je puno češći. Točka traži članove objekta.
console.log( osoba.ime );
console.log( osoba.prezime );

// svojstva mogu biti i objekti
osoba.adresa = new Object();

osoba.adresa.ulica = 'Vodovodna 13';
osoba.adresa.grad = 'Zagreb';
osoba.adresa.drzava = 'Hrvatska';

console.log( osoba.adresa.ulica );
console.log( osoba.adresa.grad );
console.log( osoba.adresa.drzava );