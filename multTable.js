multiplicationTable = function(size) {
    // insert code here
    let answer = []
    for (let i = 1; i <= size; i++){
      let line = [];
      for (let j = 1; j <= size; j++){
        line.push(i * j);
      }
      answer.push(line);
    }
    return answer;
  }