function capitalize(s){
    let odd = s.split('').map((element, index) => index % 2 === 0 ?  element.toUpperCase() : element).join('')
    let even = s.split('').map((element, index) => index % 2 !== 0 ? element.toUpperCase() : element).join('')
    return [odd, even];
  };