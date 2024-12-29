/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let right = 0
    let arr = []
    let length = 0
    while(s[right]) {
        if(arr.indexOf(s[right]) >= 0) {
            arr.splice(0, arr.indexOf(s[right]) + 1)
            arr.push(s[right])
            right ++
        } else {
            arr.push(s[right])
            right ++
        }
        length = Math.max(length, arr.length)
    }
    return length
};
// @lc code=end



/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "dvdf"\n
// @lcpr case=end

 */

