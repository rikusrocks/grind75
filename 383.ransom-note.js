/*
 * @lc app=leetcode.cn id=383 lang=javascript
 * @lcpr version=30204
 *
 * [383] 赎金信
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mapM = {}
    let result = true
    magazine.split("").forEach(s => {
        if(mapM[s]) mapM[s] += 1
        else mapM[s] = 1
    })
    ransomNote.split("").forEach(c => {
        if(mapM[c]) mapM[c] --
        else result = false
    })
    return result
};
// @lc code=end



/*
// @lcpr case=start
// "a"\n"b"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"ab"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"aab"\n
// @lcpr case=end

 */

