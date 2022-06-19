function createPhoneNumber(numbers) {
    let a = numbers.splice(0, 3);
    let b = numbers.splice(0, 3);

    return `(` + a.join('') + `) ` + b.join('') + `-` + numbers.join('')
}