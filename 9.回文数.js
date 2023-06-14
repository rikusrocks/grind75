/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=21909
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split('')
    if(arr.length === 1) return true
    let left
    let right
    if(arr.length % 2 === 0) {
        left = arr.length/2 - 1
        right = arr.length/2
    } else {
        left = Math.floor(arr.length/2)
        right = Math.floor(arr.length/2)
    }
    while(left >= 0 && right < arr.length) {
        console.log(left, right)
        if(arr[left] !== arr[right]) return false
        left --
        right ++
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */

