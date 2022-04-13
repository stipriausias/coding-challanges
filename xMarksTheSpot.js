const xMarksTheSpot = (input) => {
    let num = 0;
    for(let i = 0; i < input.length; i++){
      for (let j = 0; j < input[0].length; j++){
        if (input[i][j] === 'x' && num === 2){
          return []
          } 
        
        }
      }
     return []
    }
   
  
  
  // const xMarksTheSpot = (input) => {
  //   for(let i = 0; i < input.length; i++){
  //     for (let j = 0; j < input[0].length; j++){
  //       if (input[i][j] === 'x' && num < 1){
  //         for(let k = 0; k < input.length; k++){
  //           for (let l = 0; l < input[0].length; l++){
  //                if (input[k][l] === 'x'){
  //                   return []
  //                   }   
  //           }
  //           return [i,j]
  //         }
  //       }
  //     }
  //   }
  //   return []
  // }