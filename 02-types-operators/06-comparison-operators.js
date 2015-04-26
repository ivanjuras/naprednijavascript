
/*

	Kod uspoređivanja, boolean tip sa vrijednosti false se uvijek pretvara u 0, undefined se pretvara u NaN, null se pretvara u 0.

	=== je striktna provjera jednakosti. Ovaj operator ne pokušava pretvoriti različite tipove podataka u iste. Ako dvije vrijednosti nisu istog tipa, automatski se vraća false. Ovaj operator trebao bi se koristiti u 99% slučajeva.

*/

// ovaj izraz izbacuje true zbog toga što:
// 1. se gleda koji operator ima prednost. Ovdje su svi operatori isti.
// zbog toga se gleda asocijativnost (u ovom slučaju s lijeva na desno).
// 3 < 2 je false, a false se pretvara u 0
// 0 < 1 i ukupni rezultat je true
console.log( 3 < 2 < 1 );

// dvostruka jednakost - vratit će true iako nisu isti tipovi podataka
console.log( '3' == 3 );

// trostruka jednakost - vratit će false, jer nisu isti tip podatka.
console.log( '3' === 3 );