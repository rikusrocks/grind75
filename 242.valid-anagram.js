/*
 * @lc app=leetcode.cn id=242 lang=javascript
 * @lcpr version=30204
 *
 * [242] 有效的字母异位词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sArr = []
    let tArr = []
    if(s.length !== t.length) return false
    for (let index = 0; index < s.length; index++) {
        const elementS = s[index];
        const elementT = t[index];
        if(elementS !== elementT) {
            if(sArr.indexOf(elementT) >= 0) {
                sArr.splice(sArr.indexOf(elementT), 1)
            } else {
                tArr.push(elementT)
            }
            if(tArr.indexOf(elementS) >= 0) {
                tArr.splice(tArr.indexOf(elementS), 1)
            }else {
                sArr.push(elementS)
            }
        }
    }

    return sArr.length === 0 && tArr.length ===0
};
// @lc code=end



/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

 */

