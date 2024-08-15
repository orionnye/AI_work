// Function to retrieve median factor
// Retrieve closest whole sqrt
function getMedianFactor(number) {
    return Math.floor(Math.sqrt(number));
}

function translateRadix(number, toRadix, fromRadix = 10) {
    // calculate the number of indexes number has using toRadix as the radix
    let newIndex = 0;
    while (toRadix ** newIndex <= number) {
        newIndex += 1;
    }
    let indexes = [];
    // let runningVal = number;
    for (let i = 1; i <= newIndex; i++) {
        // let indexVal = runningVal % (toRadix ** 4);
        let indexVal = Math.floor(number % (toRadix ** i));
        indexes.push(indexVal);
        // runningVal -= indexVal;
    }
    return indexes;
}
console.log(translateRadix(42, 4));
console.log(translateRadix(16, 4));

console.log(getMedianFactor(1));
// console.log(getMedianFactor(2));
// console.log(getMedianFactor(3));
// console.log(getMedianFactor(4));
// console.log(getMedianFactor(8));
// console.log(getMedianFactor(12));
// console.log(getMedianFactor(16));
// console.log(getMedianFactor(24));
// console.log(getMedianFactor(240));