/*
 * @lc app=leetcode.cn id=8 lang=javascript
 * @lcpr version=21909
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // parseInt 可以删除和数字无关的部分
    // 开头如果不是数字相关则返回NaN
    // isNaN测试
    const number = parseInt(s, 10)
    if(isNaN(number)) {
        return 0
    } else if(number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
        return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1
    } else {
        return number
    }
};
// @lc code=end



/*
// @lcpr case=start
// "words and 987"\n
// @lcpr case=end

// @lcpr case=start
// "42"\n
// @lcpr case=end

// @lcpr case=start
// "   -42"\n
// @lcpr case=end

// @lcpr case=start
// "4193 with words"\n
// @lcpr case=end

 */

