
/*

  U Javascriptu, funkcije su prvoklasne funkcije. To znači da sve što možemo raditi sa drugim tipovima podataka, možemo raditi i sa funkcijama.

  Funkcije nisu ništa drugo doli specijalni tip objekta. Zbog toga im možemo dodavati svojstva i metode.

  Svaka funkcija ima posebno svojstvo (property) pod imenom CODE. U tom svojstvu nalazi se stvarni kod koji smo napisali. To svojstvo možemo pozvati zagradama - ().

  Iz ovoga vidimo da je kod koji napišemo samo jedno od svojstava objekta koji je funkcija.

*/

// Funkcija pozdrav - svojstvo NAME = pozdrav, i možemo ga pozvati
function pozdrav() {

  console.log( 'Pozdrav!' );
  
}

// Dodavanje svojstva funkciji - funkcija je jednostavno objekt
pozdrav.jezik = 'hrvatski';

console.log( pozdrav );
console.log( pozdrav.jezik );