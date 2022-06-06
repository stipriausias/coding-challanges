function evenLast(numbers) {
    // Good luck..
    return numbers.reduce((sum, element, index) => index % 2 ? sum : sum + element, 0) * numbers[numbers.length - 1] || 0
}