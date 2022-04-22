var capitals = function (word) {
	// Write your code here
  let answer = []
  word.split('').forEach((element, index) => element === element.toUpperCase() ? answer.push(index) : 0)
  return answer
};