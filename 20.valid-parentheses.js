/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30204
 *
 * [20] 有效的括号
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  let stringArr = s.split("");
  while (stringArr.length > 0) {
    let temp = stringArr.shift();
    let temp1 = arr[arr.length - 1];
    if (temp === "(" || temp === "{" || temp === "[") {
      arr.push(temp);
    }
    console.log(arr)
    if (temp === ")") {
      if (temp1 === "(") {
        arr.pop();
      } else {
        return false;
      }
    }
    if (temp === "}") {
      if (temp1 === "{") {
        arr.pop();
      } else {
        return false;
      }
    }
    if (temp === "]") {
      if (temp1 === "[") {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
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
