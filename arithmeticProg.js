function arithmeticSequenceElements(a,r,n) {
    //your code here
    let arr = [];
    for (let i = 0; i < n; i++){
      arr.push(a);
      a += r;
    }
    return arr.join(', ')
  }