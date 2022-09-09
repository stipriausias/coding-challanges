function crap(x, bags, cap){
    let answer =  x.map((element, index) => element.reduce((sum, element) => element == '@' ? sum + 1 : sum, 0 )).reduce((sum, elm) => sum + elm, 0)
    if (x.map((element, index) => element.reduce((sum, element) => element == 'D' ? sum + 1 : sum, 0 )).reduce((sum, elm) => sum + elm, 0) >= 1){
      return 'Dog!!'
    } else if (answer > bags){
    return 'Cr@p'
    } else {
      return 'Clean'
    }
   }