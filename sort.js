// sort
const arraySort = [12, 2, 8, 5, 1, 6, 4, 15];

/* Function Swap */
function Swap(arr, i, min) {
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

// selection sort
for (let i = 0; i < arraySort.length; i++) {
    let min = i;
    for (let j = i + 1; j < arraySort.length; j++) {
        if (arraySort[j] < arraySort[min]) {
            min = j;
        }
    }
    if (min != i) {
        Swap(arraySort, i, min)
    }
}

// bubble sort 
for (let i = 0; i < arraySort.length; i++) {
    for (let j = arraySort.length - 1; j > i; j--) {
        if (arraySort[j] < arraySort[j - 1]) {
            Swap(arraySort, j - 1, j);
        }
    }
}

console.log(arraySort)