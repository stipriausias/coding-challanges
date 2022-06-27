function solution(str, ending){
    // TODO: complete
    if (ending.length === 0) return true
    return str.split('').splice(-(ending.split('').length)).join('') == ending
  }