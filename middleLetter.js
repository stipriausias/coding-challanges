function getMiddle(s)
{
  //Code goes here!
  if (s.split('').length % 2 === 0){
    return s.split('').splice(s.length / 2 -1, 2).join('')
  } else {
    return s.split('').splice(Math.floor(s.length / 2), 1).join('')
  }
}