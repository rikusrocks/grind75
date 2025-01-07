/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30204
 *
 * [5] 最长回文子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2) return s
    let result = []
    const isPalindrome = (a, b) => {
        let temp = []
        while(a >= 0 && b < s.length && s[a] === s[b]) {
            if(a === b) {
                temp.push(s[a])
            } else {
                temp.unshift(s[a])
                temp.push(s[b])
            }
                a--
                b++
        }
        result = result.length > temp.length ? result : temp
    }
    for (let i = 0; i < s.length; i++) {
        isPalindrome(i, i)
        if(s[i] === s[i + 1])isPalindrome(i, i + 1)
    }
    return result.join("")
};
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

