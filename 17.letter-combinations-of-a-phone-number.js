/*
 * @lc app=leetcode.cn id=17 lang=javascript
 * @lcpr version=30204
 *
 * [17] 电话号码的字母组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length === 0) return []
  let result = [];
  let temp = []
  const KEY = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const backtrack = (temp, i) => {
    if(temp.length === digits.length) {
        result.push(temp.join(""))
        return
    }
        const element = digits[i];
        let arr = KEY[element]
        for(let j = 0; j < arr.length; j ++) {
            temp.push(arr[j])
            backtrack(temp, i + 1)
            temp.pop()
        }
  } 
  backtrack(temp, 0)
    return result
};
console.log(letterCombinations("23"))
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
