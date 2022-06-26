// return masked string
function maskify(cc) {
    return cc.split('').map((element, index) => index < cc.length - 4 ? element = '#' : element).join('')
}