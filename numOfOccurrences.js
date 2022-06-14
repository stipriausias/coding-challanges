Array.prototype.numberOfOccurrences = function (num) {
    let p = 0
    for (let i = 0; i < this.length; i++) {
        if (this[i] === num) {
            p++
        }
    }
    return p;
}