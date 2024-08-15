/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    // Most efficient array swap method
    function swap(i, j) {
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }

    function route(i) {
        // 
        while (true) {
            let n = nums[i]
            let index = n - 1
            if (
                index >= 0 && 
                index < nums.length && 
                nums[index] != nums[i]
            )
                swap(i, index)
            else
                break
        }
    }

    for (let i = 0; i < nums.length; i++) {
        route(i)
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1)
            return i + 1
    }

    return nums.length + 1

};