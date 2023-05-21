/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=21908
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    let size = nums.length
    let firstKey = 0
    while(firstKey < size -2 ){
        let secondKey = firstKey + 1
        let lastKey = size - 1
        if (nums[firstKey] > 0) break
        while(secondKey < lastKey) {
            if(nums[firstKey] * nums[lastKey] > 0) break
            let sum = nums[firstKey] + nums[secondKey] + nums[lastKey]
            if(sum === 0) {
                result.push([nums[firstKey], nums[secondKey], nums[lastKey]])
            }
            if(sum <= 0) {
                while(nums[secondKey] === nums[++secondKey]) { }
            } else {
                while(nums[lastKey] === nums[--lastKey]) { }
            }
            
        }
        while(nums[firstKey] === nums[++firstKey]) { }
    }
    // for(let firstKey = 0; firstKey < size - 2; firstKey ++) {
    //     if (nums[firstKey] > 0) break
    //     //console.log([nums[firstKey], nums[secondKey], nums[lastKey]])
    //     let secondKey = firstKey + 1
    //     let lastKey = size - 1
    //     while (secondKey < lastKey) {
    //         //if(nums[firstKey] * nums[lastKey] > 0) break
    //         console.log("24")                
    //         console.log([nums[firstKey], nums[secondKey], nums[lastKey]])
    //         let sum = nums[firstKey] + nums[secondKey] + nums[lastKey]
    //         if (sum === 0) {
    //             result.push([nums[firstKey], nums[secondKey], nums[lastKey]])
    //         }
    //         if (sum <= 0) {
    //             console.log("34")  
    //             console.log([nums[firstKey], nums[secondKey], nums[lastKey]])
    //             while (nums[secondKey] === nums[++secondKey]) {}
    //         } else {
    //             console.log("37")  
    //             console.log([nums[firstKey], nums[secondKey], nums[lastKey]])
    //             while (nums[lastKey] === nums[--lastKey]) {}
    //         }
    //         console.log("41")  
    //         console.log([nums[firstKey], nums[secondKey], nums[lastKey]])
    //         while (nums[firstKey] === nums[++firstKey]) {}
    //     }
    // }

    return result
};
// @lc code=end



/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

