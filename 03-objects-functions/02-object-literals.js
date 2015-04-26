
/*

  Sintaksa u Javascriptu nam dopušta da napravimo literalne objekte. Definiramo ih jednostavno kao dvije vitičaste zagrade pridodane varijabli.

*/

// ovo je jednako kao i var osoba = new Object(). Vitičaste zagrade NISU operator. Također, na ovaj način odmah možemo definirati i svojstva i metode.
var Ivan = {

  ime: 'Ivan',
  prezime: 'Juras',
  adresa: {
    ulica: 'Vodovodna 13',
    grad: 'Zagreb',
    drzava: 'Hrvatska'
  }

};

function pozdravi( osoba ) {

  console.log( 'Pozdrav ' + osoba.ime );

}

pozdravi( Ivan );

// objekt možemo napraviti u bilo kojem trenutku, pa čak i trenutku poziva funkcije
pozdravi({
  ime: 'Ana',
  prezime: 'Anić'
});