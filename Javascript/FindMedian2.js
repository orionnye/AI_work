console.log("Hello World");

let array1 = [3];
let array2 = [-2, -1];

for (let i = 0; i < 1; i++) {
    array1.push(-Math.floor(Math.random()*9));
    array2.push(Math.floor(Math.random()*9));
}

function findMedian(arr1, arr2) {
    // store, under and over and median will be retrieved after
    var under = [];
    var over = [];

    // median should equal the middle point of unders last value and overs first value
    var median = () => {
        let overestUnder = under[under.length-1];
        let underestOver = over[over.length-1];
        
    }
}