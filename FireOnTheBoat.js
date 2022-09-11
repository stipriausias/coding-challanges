function fireFight(s){
    return s.split(' ').map((element, index) => element.replace('Fire','~~')).join(' ')
  }