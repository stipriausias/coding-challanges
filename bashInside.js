function insertDash(num) {
    //code me
   let Arr = num.toString().split('')
   let newArr = []
 //   return num[0] % 2 != 0
   for (let i = 0; i < Arr.length; i++){
     newArr.push(Arr[i])
     if (Arr[i] % 2 !== 0 && Arr[i + 1] % 2 !== 0){
       newArr.push('-')
     }
       
   }
   if (newArr[newArr.length - 1] === '-'){
     newArr.pop()
   }
 
   return newArr.join('')
 
 }