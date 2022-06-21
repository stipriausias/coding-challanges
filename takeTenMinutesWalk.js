function isValidWalk(walk) {
    //insert brilliant code here
   let n = walk.reduce((sum , element) => element === 'n' ? sum + 1 : sum, 0);
    let s = walk.reduce((sum , element) => element === 's' ? sum + 1 : sum, 0);
    let w = walk.reduce((sum , element) => element === 'w' ? sum + 1 : sum, 0);
    let e = walk.reduce((sum , element) => element === 'e' ? sum + 1 : sum, 0);
    if ( n === s && w === e && walk.length === 10){
      return true
    } else {
      return false
    }
  }