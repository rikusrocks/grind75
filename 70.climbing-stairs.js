/*
 * @lc app=leetcode.cn id=70 lang=javascript
 * @lcpr version=30204
 *
 * [70] 爬楼梯
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = [1, 2]
    for (let index = 2; index < n; index++) {
        dp[index] = dp[index - 1] + dp[index - 2]
    }

    return dp[n - 1]
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

