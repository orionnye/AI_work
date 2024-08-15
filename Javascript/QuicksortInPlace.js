

function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    let pivotIndex = partition(arr, left, right);
    quickSortInPlace(arr, left, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}

function swap(arr, i, j) {
    arr.splice(i, 1, arr.splice(j, 1, arr[i])[0]);
}

// Example usage:
let arr = [7, 6, 5, 4, 3, 2, 1];
console.log(arr);
quickSortInPlace(arr);
console.log(arr); // Output: [1, 1, 2, 3, 6, 8, 10]
