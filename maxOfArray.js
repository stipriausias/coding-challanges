function maxProduct(numbers, size) {
    //your code here
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((sum, element) => sum * element, 1)
}