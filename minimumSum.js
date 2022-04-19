function sumOfMinimums(arr) {
    // your code here
    return arr.reduce((sum, element) => sum + Math.min(...element), 0)
  }