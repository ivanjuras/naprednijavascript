/*

  ES6 uvodi novi način deklariranja varijabli, ključnom riječi "let". Pomoću ove ključne riječi Javascriptu je omogućen "block scoping".

  To znači da će ta varijabla biti dostupna samo u trenutku izvođenja određenog bloka, i biti će dostupna samo u tom bloku.

*/

// ... neki kod ...

if ( a > b ) {

  // c je dostupan i vidljiv samo unutar ove if kontrole
  let c = true;

}