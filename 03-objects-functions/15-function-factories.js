
/*

  Funkcije tvornice su funkcije koje vraćaju funkciju kao rezultat, a ta funkcija ima vanjsko okruženje ovisno o pozivu funkcije tvornice. Koristimo ih kao primjer funkcija zatvaranja (closures).

*/

// Napravimo funkciju koja stvara pozdrave ovisno o jeziku koji joj prosljedimo
function napraviPozdrav( jezik ) {

  // Ta funkcija vraća funkciju kao rezultat. Ova funkcija ima referencu na vanjsko okruženje (na varijablu jezik), čak i kada EC vanjske funkcije prestane postojati.
  return function( ime, prezime ) {
  
    if ( jezik === 'hr' ) {
      console.log( 'Pozdrav ' + ime + ' ' + prezime + ', drago mi je!' );
    }

    if ( jezik === 'en' ) {
      console.log( 'Hello ' + ime + ' ' + prezime + ', nice to meet you!' );
    }
  
  }

}

// Napravimo 2 nove specifične funkcije iz gornje funkcije tvornice
var pozdravHrvatski = napraviPozdrav( 'hr' );
var pozdravEngleski = napraviPozdrav( 'en' );

// Pozovimo sada ove 2 funkcije. Svaka funkcija ispisuje ispravan tekst zbog toga što u trenutku stvaranja svake funkcije funkcija tvornica stvara svoj posebni EC koji u svakom pojedinom slučaju ima drugačije vrijednosti varijabli. U EC-u 1 varijabla ima vrijednost 'hr' koja se pamti, a u EC-u 2, varijabla ima vrijednost 'en' koja se također pamti i nakon što EC završi.
pozdravHrvatski( 'Ivan', 'Juras' );
pozdravEngleski( 'Ivan', 'Juras' );