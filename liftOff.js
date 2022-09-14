function liftoff(instructions){
  
    return instructions.sort((a,b) => b - a).toString().split(',').join(' ') + ' liftoff!'  //...
  }