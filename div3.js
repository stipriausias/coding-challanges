function divisibleByThree(str){
    if (str.split('').reduce((sum, element) => sum + Number(element),0) % 3 === 0){
      return true;
    } else {
      return false;
    }
  }