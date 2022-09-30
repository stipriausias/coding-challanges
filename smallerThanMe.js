function smaller(nums) {
    //code me
      return nums.map((element, index, array) => array.slice(index).filter((element2, index2) => element2 < element).length )
    //   return nums.slice(1)
    }