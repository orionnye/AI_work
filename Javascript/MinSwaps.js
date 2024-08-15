
function getMinNumMoves(blocks) {
    // Write your code here
    // find index of lightest
        // put heaviest most right
    // find index of heaviest
        // put heaviest most left
    let minIndex = 0;
    let maxIndex = 0;
    
    for (let i = 1; i <blocks.length; i++) {
        let block = blocks[i];
        let min = blocks[minIndex];
        let max = blocks[maxIndex];
        
        // check min
        if (block < min) {
            console.log(minIndex)
            minIndex = i;
        }
        // check max
        if (block > max) {
            maxIndex = i;
        }
    }
    let minDist = minIndex;
    let maxDist = maxIndex - (blocks.length - 1);
    let minSwaps = minDist + maxDist;
    if (minDist > maxDist) {
        minSwaps -= 1;
    }
    
    return minSwaps;

}

// let [];