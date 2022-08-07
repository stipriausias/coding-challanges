function nthChar(words){
    let answer = ''
   return words.map((element, index) => element.split('')[index]).join('')
  }