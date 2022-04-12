function arrAdder(arr) {
    let answer = '';
    let lapas = '';
    for (let i = 0; i < arr. length; i++){
      for (let j = 0; j < arr.length; j++){
        lapas = lapas + (arr[j][i])
      }
      answer = answer + `${lapas} `
      lapas = ''
    }
      
    return answer.trim()
  }