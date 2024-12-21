/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=30204
 *
 * [121] 买卖股票的最佳时机
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0
    let min = Number.POSITIVE_INFINITY
    prices.forEach(p => {
        if(p < min) {
            min = p
        }
        result = p - min > result ? p - min : result;
    })
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

