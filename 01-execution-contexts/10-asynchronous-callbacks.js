/*

	Izvršavanje koda u Javascriptu je sinkrono, ali događaji u samom browseru su asinkroni (događa ih se više odjednom).

	Callback funkcije su funkcije koje se pozivaju nakon što se dogodi nešto unutar browsera.

	Postoji nešto što se zove The Event Stack, i dio je browsera. Unutar Event Stacka browser slaže sve događaje koji su spremni da ih Javascript pokupi.

	Kada Javascript pokupi neki event sa Event Stacka, to čini pomoću event listenera. Event listener nakon toga poziva funkciju koja je namjenjena tom event listeneru.

	Bitno je napomenuti da Javascript osluškuje da li ima nešto u Event Stacku NAKON što se isprazni već postojeći execution stack (svi EC-ovi koji trenutno postoje, čak i globalni EC).

*/

// funkcija koja traje dugo
function dugaFunkcija() {

	var ms = 3000 + new Date().getTime();

	while ( new Date() < ms ) {}

	console.log( 'Završen EC duge funkcije!' );

}

// event listener
function slusajKlikove() {

	console.log( 'Dogodio se klik!' );

}

// slušaj klikove
document.addEventListener( 'click', slusajKlikove );

// pozovi dugu funkciju
dugaFunkcija();

// završi globalni EC
console.log( 'Završen globalni EC' );