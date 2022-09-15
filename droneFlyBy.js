function flyBy(lamps, drone) {
    return lamps.split('').map((element, index) => index < drone.length ? element = 'o' : element).join('')
    //  return lamps.split('').map((element,index) => index < drone.length - 1 ? element == 'o' ? element ).join()
}