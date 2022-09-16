function fireFight(s){
    return s.split(' ').map((element, index) => element.replace('Fire','~~')).join(' ')
    // not the best solution but atleast it's good soluti
  }