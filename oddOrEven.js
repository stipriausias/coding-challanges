function oddOrEven(array) {
    //enter code here
   return array.reduce((sum,element) => sum + element, 0) % 2 === 0 ? "even" : 'odd'
 }