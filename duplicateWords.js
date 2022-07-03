function removeDuplicateWords(s) {
    // your perfect code...
    return s.split(' ').filter((element, index, s) => s.indexOf(element) === index).join(' ')
}