/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=21908
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let arr = s.split('')
    let result = []
    for(let i = 0; i < arr.length; i ++) {
        if(result.length === 0){
            result.push(arr[i])
        } else {
            let temp = result[result.length - 1]
            if(obj[temp] === arr[i]) {
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result.length === 0 ? true : false
};
// @lc code=end



/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

 */

