
function countLanguages(list) {
    //thank you
    return list.reduce((obj, index) => {
      if (!obj[index.language]){
        obj[index.language] = 0;
      } 
        obj[index.language]++
      return obj;
    }, {})
  }