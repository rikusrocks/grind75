/*
 * @lc app=leetcode.cn id=29 lang=javascript
 * @lcpr version=21909
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === -1) return dividend == -2147483648 ? 2147483647 : -dividend
    if (divisor === 1) return dividend
    let div = divisor > 0 ? divisor : -divisor
    let num = dividend > 0 ? dividend : -dividend
    let result = 0
    while(num >= div) {
        result ++
        num -= div
    }
    if(dividend > 0 && divisor > 0) {
        return result
    } else if(dividend < 0 && divisor < 0) {
        return result
    } else {
        return -result
    }
    
};
// @lc code=end



/*
// @lcpr case=start
// 10\n3\n
// @lcpr case=end

// @lcpr case=start
// 7\n-3\n
// @lcpr case=end

 */

