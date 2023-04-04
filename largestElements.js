function largest2(n, arr) {
    // Sort the array in descending order
    arr.sort(function (a, b) {
        return b - a;
    });

    // Return the first n elements of the sorted array
    return arr.slice(0, n);
}