var FilterString = function (value) {
    //Complete this function :)
    return Number(value.split('').filter(item => !isNaN(parseInt(item))).join(''))
}