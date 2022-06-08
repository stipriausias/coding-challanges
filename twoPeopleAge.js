function getAges(sum,difference){
    let a = (sum + difference) / 2;
    let b = a - difference;
    if (sum < 0 || difference < 0 || a < 0 || b < 0){
      return null;
    } else {
      return [a, b]
    }
  };