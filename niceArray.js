function isNice(arr){
    return arr.filter(element => (arr.includes(element - 1) || arr.includes(element + 1) ? true : false) == true).length == arr.length
   }


   console.log(isNice([3,4,5,7]))