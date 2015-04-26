
/*

	Prednost operatora nam govori koja se operatorska funkcija poziva prva. Funkcije se pozivaju prema redosljedu prednosti operatora (što veća prednost, poziva se prije).

	Asocijativnost nam govori prema kojem redosljedu (lijevo-na-desno, desno-na-lijevo) se pozivaju operatorske funkcije ako su sve jednake težine (prednosti).

	Zagrade imaju najveću prednost operatora.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/

// funkcija množenja ima prednost nad funkcijom zbrajanja
var a = 3 + 4 * 5;

console.log( a );

// prema asocijativnosti, operator = ima desno-na-lijevo asocijativnost
var a = 2,
		b = 3,
		c = 4;

a = b = c;

console.log( a );
console.log( b );
console.log( c );