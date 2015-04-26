
/*

  Iako JS parser sam ubacuje točku-zarez na kraju svake linije, dobro bi bilo da točku-zarez pišemo sami.

  Naime, svaki puta kada pritisnemo enter, parser sam stavlja točku zarez. Zbog toga u nekim slučajevima nije dobro stavljati vitičaste zagrade u novi red.

*/

function vratiObjekt() {

  // U ovom slučaju, JS parser će staviti ; iza returna i funkcija će vratiti undefined
  return
  {
    ime: 'Ivan'
  }

}

console.log( vratiObjekt() );