
/*

  undefined, null, ''(prazni string) i 0 pretvaraju se u false ako se samo oni nalaze u provjeri (npr u if kontroli).

*/

var a;

// neki kod koji ide na Internet i traži neku vrijednost...

// provjerava a - ovdje je a undefined, što znači da je false
if ( a ) {

  console.log( 'Nešto postoji u varijabli a!' );

}