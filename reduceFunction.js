function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce((sum, element) => sum + element, 0)
  }