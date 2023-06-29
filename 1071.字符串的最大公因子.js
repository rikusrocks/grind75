/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 * @lcpr version=21909
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return ''
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b) 
    return str1.substring(0, gcd(str1.length, str2.length))
};
// @lc code=end



/*
// @lcpr case=start
// "ABCABC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "ABABAB"\n"ABAB"\n
// @lcpr case=end

// @lcpr case=start
// "LEET"\n"CODE"\n
// @lcpr case=end

 */

