var greet = function (name) {
    //   return name.split('').splice(1,name.length).join("").toLowerCase()
    return `Hello ${name.split('').splice(0, 1).join("").toUpperCase() + name.split('').splice(1, name.length).join("").toLowerCase()}!`
};