const param = 10;

const inner = (arg) => arg * 5;

function outer(inner, param) {
  return inner(param);
}

console.log(outer((_val) => param +5, 5));
// good