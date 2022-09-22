function betweenExtremes(numbers) {
    //write your code here
    numbers.sort((a, b) => a - b);
    return -numbers[0] + numbers[numbers.length - 1]
    // good
}