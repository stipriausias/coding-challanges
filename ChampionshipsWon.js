function countWins(winnerList, country) {
    return winnerList.reduce((sum, element) => element.country === country ? sum + 1 : sum, 0)
    // good solution
}