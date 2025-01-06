/*
 * @lc app=leetcode.cn id=8 lang=javascript
 * @lcpr version=30204
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
    const number = parseInt(str, 10);

    if(isNaN(number)) {
        return 0;
    } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return number;
    }
};
// @lc code=end

/*
// @lcpr case=start
// "1-1"\n
// @lcpr case=end

// @lcpr case=start
// "   -0402"\n
// @lcpr case=end

// @lcpr case=start
// "4193 with words"\n
// @lcpr case=end

 */
