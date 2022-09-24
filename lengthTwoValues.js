function alternate(n, firstValue, secondValue){
    // your code
    let lapas = [];
    for (let i = 1; i <= n; i++){
      if(i % 2 != 0){
        lapas.push(firstValue);
      } else {
        lapas.push(secondValue);
      }
    }
    return lapas;
    // good solutions
  }