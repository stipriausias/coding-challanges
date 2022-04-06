function numObj(s){
    return s.map((element, index) => ({[element]: String.fromCharCode(element)}))
  }