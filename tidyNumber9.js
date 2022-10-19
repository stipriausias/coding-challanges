function tidyNumber(n){
    //your code here
    return n.toString().split('').map(element => Number(element)).every((el, ind, arr) => !ind || el >= arr[ind - 1]);
    // good solutions
  }