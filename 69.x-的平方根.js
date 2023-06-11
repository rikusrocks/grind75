/*
 * @lc app=leetcode.cn id=69 lang=javascript
 * @lcpr version=21909
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0
    let end = x
    while(start <= end) {
        let mid = Math.floor((start + end) * 0.5)
        if(mid * mid === x) {
            return mid
        }
        if(x > mid * mid) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return end
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */

