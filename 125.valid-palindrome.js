/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30204
 *
 * [125] 验证回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /[A-Za-z0-9]/
    let arr = s.split("").filter(s => regex.test(s))
    let temp = arr.join("").toLowerCase()
    return temp === temp.split("").reverse().join("")
};
// @lc code=end



/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

