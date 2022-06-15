function maxGap (numbers){
    //your code here
   let number = numbers.sort((a, b) => b - a)
    let answer = 0;
    for (let i = 0; i < number.length; i++){
      
        if(number[i] - number[i + 1] > answer){
          answer = number[i] - number[i + 1];
      }
    }
    return answer;
  }