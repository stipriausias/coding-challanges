String.prototype.toJadenCase = function () {
    //...
    return this.
    split(' ').
    map((element, index) => element[0].toUpperCase() + element.slice(1)).
    join(' ');
    // good so
  };