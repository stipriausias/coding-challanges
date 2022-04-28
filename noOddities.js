function noOdds( values ){
    // Return all non-odd values
    return values.filter((element, index) => element % 2 === 0)
  }