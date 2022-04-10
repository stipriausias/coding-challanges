function squareDigits(num){
    return Number(String(num).split('').map(element => element ** 2).join(''));
  }