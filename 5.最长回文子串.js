/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=21909
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2) return s
    let result = ''
    for(let i = 0; i < s.length; i ++) {
        check(i, i)
        check(i, i + 1)
    }
    function check (m,n) {
        while(m >= 0 && n < s.length && s[m] === s[n]) {
            m--
            n++
        }
        if(n - m - 1 >= result.length) {
            result = s.slice(m + 1, n)
        }
    }

    return result
}; 
// @lc code=end



/*

// @lcpr case=start
// "ac"\n
// @lcpr case=end

// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

