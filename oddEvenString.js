function sortMyString(S) {
    // your code here
    return S.split('').filter((element, index) => index % 2 === 0).join('') + ' ' + S.split('').filter((element, index) => index % 2 !== 0).join('')
    // good solution
    
}