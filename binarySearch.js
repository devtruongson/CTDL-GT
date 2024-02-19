
const initialArray = [1, 2, 4, 6, 7, 10, 12];

// binary search
function binarySearch(array, searchWant) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const middleware = ((left + right) / 2);
        if (array[middleware] === searchWant) {
            return middleware;
        } else if (array[middleware] < searchWant) {
            left = middleware + 1;
        } else {
            right = middleware - 1;
        }
    }

    // if doesn't search result such as equal -1
    return -1;
}

// start app
const resultPosition = binarySearch(initialArray, 12)
console.log(resultPosition)