// sort
const arraySort = [12, 2, 8, 5, 1, 6, 4, 15];

/* Function Swap */
function Swap(arr, i, min) {
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

// // selection sort
// for (let i = 0; i < arraySort.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arraySort.length; j++) {
//         if (arraySort[j] < arraySort[min]) {
//             min = j;
//         }
//     }
//     if (min != i) {
//         Swap(arraySort, i, min)
//     }
// }

// // bubble sort
// for (let i = 0; i < arraySort.length; i++) {
//     for (let j = arraySort.length - 1; j > i; j--) {
//         if (arraySort[j] < arraySort[j - 1]) {
//             Swap(arraySort, j - 1, j);
//         }
//     }
// }


// insertion sort 
// for (let i = 1; i < arraySort.length; i++) {
//     let indexPrev = i - 1;
//     const saveValue = arraySort[i];
//     while ((indexPrev >= 0 && arraySort[indexPrev] > saveValue)) {
//         arraySort[indexPrev + 1] = arraySort[indexPrev];
//         indexPrev--;
//     }
//     arraySort[indexPrev + 1] = saveValue;
// }



// Quick sort
function quickSort(array, left, right) {
    let i = left;
    let j = right;
    const mid = Math.floor((left + right) / 2);
    while (i < j) {
        while (array[i] < array[mid]) {
            i++;
        }

        while (array[j] > array[mid]) {
            j--;
        }

        if (i <= j) {
            Swap(array, i, j);
            i++;
            j--;
        }
    }

    if (left < j) {
        quickSort(array, left, j);
    }

    if (right > i) {
        quickSort(array, i, right);
    }
}

quickSort(arraySort, 0, arraySort.length - 1)
console.log("array sort: ", arraySort)