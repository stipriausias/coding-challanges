function getAverageAge(list) {
    // thank you for checking out the Coding Meetup kata :)
    return Math.round(list.reduce((sum, element) => sum + element.age, 0) / list.length)
  }