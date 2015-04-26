/*

	U Javascriptu, 'undefined' je posebni tip podatka (vrijednost) koji nam govori to da varijabli nije dodjeljena nikakva vrijednost.

	Za razliku od ostalih programskih jezika, 'undefined' ne znači da varijabla uopće nije definirana, već da je deklarirana ali joj nikada nije pridodana nikakva vrijednost.

	Samo u slučaju da nikada niti ne deklariramo varijablu - tek tada ćemo dobiti error da ta varijabla nije definirana (Uncaught ReferenceError: variable is not defined).

*/

var a;
console.log( a );

// a je tip podatka
if ( a === undefined ) {

	console.log( 'a je undefined!' );

} else {

	console.log( 'a je definiran!' );

}
