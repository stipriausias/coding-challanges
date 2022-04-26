function maxMultiple(divisor, bound){
    //your code here
    for (let i = bound; i >0; i--){
      if(i % divisor === 0){
        return i
      }
    }
  }