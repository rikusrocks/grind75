/*
 * @lc app=leetcode.cn id=944 lang=javascript
 * @lcpr version=30204
 *
 * [944] 删列造序
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let strLength = strs[0].length
    let result = 0
    for(let i = 0; i < strLength; i ++) {
        let temp = []
        for(let j = 0; j < strs.length; j ++) {
            temp.push(strs[j][i])
            if(j === strs.length - 1) {
                for (let z = 0; z < temp.length - 1; z++) {
                    let curr = temp[z];
                    let next = temp[z + 1]
                    if(curr > next) {
                        result ++
                        break;
                    }
                }
            }
        }
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// ["cba","daf","ghi"]\n
// @lcpr case=end

// @lcpr case=start
// ["a","b"]\n
// @lcpr case=end

// @lcpr case=start
// ["zyx","wvu","tsr"]\n
// @lcpr case=end

 */

