/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=21909
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result= []
    let count = 0
    let ss = s.split('')
    ss.forEach((res) =>{
        let index = result.indexOf(res)
        if(index > -1){
         result.splice(0, index + 1)
         result.push(res)
       } else {
        result.push(res)
        result.length > count ? count = result.length : count = count
      }
      console.log(result)
    })
    return count
};
// @lc code=end



/*
// @lcpr case=start
// "aabaab!bb"\n
// @lcpr case=end

// @lcpr case=start
// "dvdf"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

 */

