function orderFood(list) {
    // thank you for checking out the Coding Meetup kata. :).
    const obj={}
  
  list.map(v=>obj[v.meal]=obj[v.meal]?obj[v.meal]+1:1)
  
  return obj
  }