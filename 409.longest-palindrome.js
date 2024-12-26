/*
 * @lc app=leetcode.cn id=409 lang=javascript
 * @lcpr version=30204
 *
 * [409] 最长回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
     if(s.length === 1) return 1
     let array = s.split("")
     let map = {}
     map[array[0]] = 1
     let result = 0
     // check if there is a single char left
     let count1 = 1
     for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if(map[element] > 0) {
            map[element] --
            result += 2
            count1 --
        } else {
            map[element] = 1
            count1 ++
        }
     }
     return count1 > 0 ? result + 1 : result   
};

// @lc code=end



/*
// @lcpr case=start
// "abccccdd"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n
// @lcpr case=end

 */

