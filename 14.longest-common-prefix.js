/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=21913
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ''
    let temp = ''
    if(strs.length === 1) return strs[0]
    for(let i = 0; i < strs[0].length; i++) {
       if(compareEach(strs, i)){
           result += strs[0][i]
       } else {
           return result
       }
    }
    return result
};

const compareEach = (arr, index) => {
    for(let i = 0; i < arr.length - 1; i ++) {
        if(arr[i][index] !== arr[i + 1][index]) {
            return false
        }
    }
    return true
}
// @lc code=end



/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */

