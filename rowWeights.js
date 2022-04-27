function rowWeights(array){
    //your code here
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < array.length; i += 2){
      team1 += array[i]
    }
    for (let i = 1; i < array.length; i += 2){
      team2 += array[i]
    }
    return [team1, team2]
  }