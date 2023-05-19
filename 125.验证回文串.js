/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=21908
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     if(s.trim().length == 0)return true
     let reg = /^[A-Za-z0-9]/
     let arr = s.toLowerCase().split("").filter(res => res.match(reg))
     if(!arr.length) return true
     for(let i = 0; i < arr.length * 0.5; i++) {
        if(arr[i] !== arr[arr.length - i - 1]) return false
     }
     return true
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

