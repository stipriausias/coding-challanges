function min(arr, toReturn) {
    // TODO
    if ( toReturn === 'index'){
       let  min = Math.min(...arr);
      return arr.indexOf(min)
    } else {
      return Math.min(...arr);
    }
  }
  