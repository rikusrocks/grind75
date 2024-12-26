/*
 * @lc app=leetcode.cn id=278 lang=javascript
 * @lcpr version=30204
 *
 * [278] 第一个错误的版本
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 0
        let high = n
        while(low <= high) {
            let mid = Math.floor(low + (high - low)/2)
            if(isBadVersion(mid)) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        return low
    };
};
// @lc code=end



/*
// @lcpr case=start
// 5\n4\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

 */

