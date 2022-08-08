
let x = 'abcdef'

function calc(x){
    let total2 = x.split('').map((element, index) => element.charCodeAt(0)).join('').split('').map((element) => element.replace('7','1')).reduce((sum, element) => sum + Number(element), 0);
    let total1 =  x.split('').map((element, index) => element.charCodeAt(0)).join('').split('').reduce((sum, element) => sum + Number(element), 0);
     return total1 - total2
    //  we did it
  }

  console.log(calc(x))