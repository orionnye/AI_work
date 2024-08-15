console.log("Hello World");

let array1 = [3];
let array2 = [-2, -1];

for (let i = 0; i < 1; i++) {
    array1.push(-Math.floor(Math.random()*9));
    array2.push(Math.floor(Math.random()*9));
}

function findMedian(nums1, nums2) {
    // We have to sort the arrays to find the median value
    let sorted = [];
    nums1.forEach(num => {
        sorted.push(num);
    })
    nums2.forEach(num => {
        sorted.push(num)
    })
    sorted = sorted.sort((a, b) => { return a-b });
    let middle = Math.floor(sorted.length / 2);
    let medians = sorted.slice(middle, middle+1);
    let median = medians[0];
    // final catch for even array lengths
    if (sorted.length % 2 == 0) {
        // it's even and we need to derive a middle value
        medians = sorted.slice(middle-1, middle + 1);
        median = medians[0] + (medians[1] - medians[0])/2;
    }
    return [median, sorted];
}

console.log("Array1:", array1);
console.log("Array2:", array2);
let solution = findMedian(array1, array2);
console.log("Solution:", solution);