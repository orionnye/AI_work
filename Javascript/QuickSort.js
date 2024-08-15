




function quicksort(array) {
    // Initial Catch that ends the process
    if (array.length <= 1) {
        return array;
    }

    // pivot to sort array upon
    var pivot = array[0];
    // Left and Right array to sort array into
    var left = [];
    var right = [];

    // Sorting
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    // Complex return function that executes when each recursive call reaches it's conclusion
    return quicksort(left).concat(pivot, quicksort(right));
}

// Example usage:

var array = [5, 3, 2, 1, 4];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random()*10));
}

var sortedArray = quicksort(array);


console.log(array); // [1, 2, 3, 4, 5]
console.log(sortedArray); // [1, 2, 3, 4, 5]