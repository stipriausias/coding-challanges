function findEvenIndex(arr)
{
  //Code goes here!
  for (let i =1; i < arr.length; i++){
   if (arr.slice(0,i).reduce((sum ,elm) => sum + elm, 0) == arr.slice(i + 1,arr.length).reduce((sum ,elm) => sum + elm, 0)) {
     return i;
   }
  }
  return -1;
}