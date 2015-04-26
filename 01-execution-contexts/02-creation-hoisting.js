
/*

	Svaki EC prolazi kroz 2 faze kod stvaranja: fazu stvaranja (creation phase) i fazu izvršenja (execution phase).

	U fazi stvaranja Javascript engine uzima sve varijable i funkcije te im unaprijed dodjeljuje prostor u memoriji, čak i prije nego što se naš kod počne izvršavati.

	Bitno je napomenuti da se varijable u ovom trenutku postavljaju na 'undefined', jer engine još ne zna što će biti u njima (sve dok u fazi izvršenja ne dođe na liniju koda gdje se varijabli pridružuje neka vrijednost).

	Za razliku od varijabli, JS engine funkciji odmah dodjeljuje potpuni potrebni prostor, i ona je u potpunosti vidljiva prije početka izvršavanja.

	Ovaj proces naziva se izvlačenje (hoisting).

*/

b();
console.log( a );

// 1. izvuci, dodaj prostor, postavi na undefined
var a = 'Hello World';

// 2. izvuci kompletno, dodaj prostor
function b() {

	console.log( 'Pozvao sam b' );

}