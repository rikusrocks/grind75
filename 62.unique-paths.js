/*
 * @lc app=leetcode.cn id=62 lang=javascript
 * @lcpr version=30204
 *
 * [62] 不同路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(m).fill().map(item => Array(n))
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1  
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1  
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end



/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

// @lcpr case=start
// 7\n3\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n
// @lcpr case=end

 */

