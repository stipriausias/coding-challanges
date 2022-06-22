function balancedNum(number)
{
    let array = number.toString().split('').map(element => Number(element));
  if (array.length % 2 === 0){
    let a = array.length / 2 - 1;
    let b = array.length / 2 + 1;
    console.log(array.splice(0,a).reduce((sum, element) => sum + element, 0))
    console.log(array.splice(b,a).reduce((sum, element) => sum + element, 0))
    if(array.splice(0,a).reduce((sum, element) => sum + element, 0) === array.splice(b,a).reduce((sum, element) => sum + element, 0)){
      return 'Balanced'
    } else {
      return 'Not Balanced'
    }
  } else {
//     let a = array.length / 2 - 1;
//     let b = array.length / 2 + 2;
//     if(array.splice(0,a).reduce((sum, element) => sum + element, 0) === array.splice(b,a).reduce((sum, element) => sum + element, 0)){
//       return 'Balanced'
//     } else {
//       return 'Not Balanced'
//     }
  }
  
}
 let number = [56239814]

console.log(balancedNum(number))