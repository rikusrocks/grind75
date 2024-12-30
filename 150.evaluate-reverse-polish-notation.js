/*
 * @lc app=leetcode.cn id=150 lang=javascript
 * @lcpr version=30204
 *
 * [150] 逆波兰表达式求值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numQueue = []
    let calculate = {
        "+": (a,b) => {return a+b},
        "-": (a,b) => {return b-a},
        "*": (a,b) => {return a*b},
        "/": (a,b) => {
            let result = b/a > 0 ? Math.floor(b/a) : Math.ceil(b/a)
            return result}
    }
    for(let i = 0; i < tokens.length; i++) {
        if(!Number.isNaN(tokens[i] * 1)) {
            numQueue.push(tokens[i] * 1)
        } else {
            let a = numQueue.pop()
            let b = numQueue.pop()
            numQueue.push(calculate[tokens[i]](a, b))
        }
    }
    return numQueue[0]
};
// @lc code=end



/*
// @lcpr case=start
// ["2","1","+","3","*"]\n
// @lcpr case=end

// @lcpr case=start
// ["4","13","5","/","+"]\n
// @lcpr case=end

// @lcpr case=start
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n
// @lcpr case=end

 */

