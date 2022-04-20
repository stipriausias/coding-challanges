function SeriesSum(n)
{
  // Happy Coding ^_^
  let arr = [];
  if (n > 1){
    let k = 4;
    let sum = 1;
    for (let i = 1; i < n; i++){
      sum += 1/k;
      k +=3
    }
    return String(sum.toFixed(2))
  } else if(n === 1) {
    return '1.00'
  } else {
    return '0.00'
  }
}