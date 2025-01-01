/*
 * @lc app=leetcode.cn id=322 lang=javascript
 * @lcpr version=30204
 *
 * [322] 零钱兑换
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(let i = 1; i < amount + 1; i++) {
        for(let c of coins) {
            if(i - c >= 0) {
                dp[i] = Math.min(dp[i], dp[i - c] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end



/*
// @lcpr case=start
// [1, 2, 5]\n11\n
// @lcpr case=end

// @lcpr case=start
// [2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */

