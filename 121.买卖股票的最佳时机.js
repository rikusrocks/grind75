/*
 * @lc app=leetcode.cn id=121 lang=javascript
 * @lcpr version=21908
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let min = Number.POSITIVE_INFINITY
    // while(prices.length > 1) {
    //     let temp = prices.shift()
    //     let set = new Set(prices)
    //     let max = Math.max(...set)
    //     profit = profit > max - temp ? profit : max - temp 
    // }
    for(let i = 0; i < prices.length; i++){
        min = prices[i] > min ? min : prices[i]
        profit = profit > prices[i] - min ? profit : prices[i] - min
    }
    return profit
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

