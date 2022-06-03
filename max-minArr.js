function solve(arr){
    //..
  let newArr = [];
  for (let i = 0; i < (arr.length / 2 + 1); i++){
    let a = Math.max(...arr);
    let b = Math.min(...arr);
    newArr.push(a);
    newArr.push(b);
    arr.sort((a, b) => a - b).shift()
    arr.sort((a, b) => b - a).shift()
  }
  return newArr;
};