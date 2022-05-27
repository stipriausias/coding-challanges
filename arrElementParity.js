function solve(arr){
    return arr.find((element, index) => -1 === arr.indexOf(-1 * element))
  };