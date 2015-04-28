
/*

  Funkcionalno programiranje je paradigma u programiranju gdje zadatke i procese razlažemo na jako male jedinice. Za svaki mali zadatak postoji njegova funkcija, i onda te funkcije prosljeđujemo u druge funkcije.

  Funkcionalno programiranje moguće je u Javascriptu zbog toga što su funkcije ustvari objekti i mogu se slati u druge funkcije.

  Ovaj način programiranja donosi potpuno novi način razmišljanja u programiranju, i omogućuje nam da strukturiramo naš kod na način koji jednostavno nije moguć u nekim programskim jezicima.

*/

// Zamislimo da iz jednog polja želimo dobiti drugo polje na način da svaki član prvog polja modificiramo. Ovako bi to izgledalo na standardni način:
var polje = [ 1, 2, 3, 4, 5 ];
var drugoPolje = [];
console.log( 'Prvo polje: '  + polje );

for ( var i = 0; i < polje.length; i++ ) {

  // Npr. želimo da drugo polje sadržava članove koji su 2x veći od prvog polja
  drugoPolje.push( polje[i] * 2 );

}
console.log( 'Drugo polje: ' + drugoPolje );

// Po principu funkcionalnog programiranja, najprije ćemo napraviti jednu sveobuhvatnu funkciju koja prima 2 parametra: polje i funkciju koja će se izvršavati nad svakim članom tog polja
function zaSvakiClan( polje, funkcija ) {

  // Radimo novo polje koje ćemo vratiti kao rezultat funkcije
  var novoPolje = [];

  // Vrtimo se po svakom članu prosljeđenog polja
  for ( var i = 0; i < polje.length ; i++ ) {
    // U novo polje guramo rezultat prosljeđene funkcije koja se izvršava nad pojedinim članom polja
    novoPolje.push(
      funkcija( polje[i] )
    );
  }

  return novoPolje;

}

// Sada, pošto imamo funkciju, puno nam je lakše svaki puta napraviti novo polje po želji. U funkciju prosljeđujemo polje nad kojim želimo nešto napraviti, i funkciju koja će nešto raditi nad svakim članom.
var trecePolje = zaSvakiClan( polje, function( clan ) {
  return clan * 2;
});
console.log( 'Treće polje: ' + trecePolje );

// Npr. želimo polje koje nam govori je li pojedini član starog polja veći od 2
var cetvrtoPolje = zaSvakiClan( polje, function( clan ) {
  return clan > 2;
});
console.log( 'Četvrto polje: ' + cetvrtoPolje );

// Što ako želimo sami navesti broj kojeg uspoređujemo sa svakim članom polja? Napravimo novu funkciju koja prima 2 argumenta, najprije broj s kojim uspoređujemo, pa onda član. Nakon toga pozovemo bind na tu funkciju, i sami odredimo koji će biti taj broj.
var jeLiClanVeciOd = function( broj, clan ) {
  return clan > broj;
};

// Ovdje je 3 ustvari drugi parametar funkcije koji sami namjestimo. Sada unutar funkcije zaSvakiClan ima mjesta za još jedan parametar, a to je član polja
var petoPolje = zaSvakiClan( polje, jeLiClanVeciOd.bind( this, 3 ) );
console.log( 'Peto polje: ' + cetvrtoPolje );

// Međutim, možemo li se riješiti stalnog pozivanja bind metode? Možemo, tako da ta funkcija kao rezultat vrati funkciju koja će se proslijediti, s time da vraćena funkcija ima na sebi bind, i kao prvi parametar broj koji smo prosljedili.
jeLiClanVeciOd = function( broj ) {

  return function( broj, clan ) {
    return clan > broj;
  }.bind( this, broj );

};

// Sada imamo kod koji je jako razumljiv i čitak. Za svaki član polja koje prosljeđujemo gledamo je li veći od 4, i to novo polje spremamo u novu varijablu.
var sestoPolje = zaSvakiClan( polje, jeLiClanVeciOd(4) );
console.log( 'Šesto polje: ' + sestoPolje );