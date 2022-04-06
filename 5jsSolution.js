
function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    return list.reduce((obj, index) => {
      if (!obj[index.language]){
        obj[index.language] = 0;
      } 
        obj[index.language]++
      return obj;
    }, {})
  }