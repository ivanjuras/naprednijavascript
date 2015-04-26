
/*

  Polja u JS-u su specijalni tip objekta.

  Za razliku od većine drugih programskih jezika, polja u JS-u mogu sadržavati bilo koje tipove podataka.

  To znači da polja mogu sadržavati i funkcije kao izraze.

*/

var polje = [

  1,
  true,
  {
    ime: 'Ivan',
    prezime: 'Juras'
  },
  function( ime, prezime ) {
    console.log( ime + ' ' + prezime );
  },
  'Pozdrav'

];

// Poziv funkcije koja je na indeksu 3, i prosljeđivanje parametara objekta koji je na indeksu 2
polje[3]( polje[2].ime, polje[2].prezime );


