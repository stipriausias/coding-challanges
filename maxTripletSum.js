function maxTriSum(numbers) {
    //your code here
    return numbers.filter((c, index) => numbers.indexOf(c) === index).sort((a, b) => b - a).slice(0, 3).reduce((sum, element) => sum + element, 0);
    //   numbers.sort((a, b) => b - a).slice(0,3).reduce((sum, element) => sum + element, 0);
}