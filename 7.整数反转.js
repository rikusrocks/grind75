/*
 * @lc app=leetcode.cn id=7 lang=javascript
 * @lcpr version=21909
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result
    x > 0 ? result = parseInt(x.toString().split('').reverse().join('')) : result = -parseInt(x.toString().split('').reverse().join(''))
    return result > 2147483647 || result < -2147483648 ? 0 : result 
};
// @lc code=end



/*
// @lcpr case=start
// 123\n
// @lcpr case=end

// @lcpr case=start
// -123\n
// @lcpr case=end

// @lcpr case=start
// 120\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */

