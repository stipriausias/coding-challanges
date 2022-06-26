function reverseWords(str) {
    // Go for it
    return str.split(' ').map(element => element.split('').reverse().join('')).join(' ')
  }