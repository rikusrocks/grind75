/*
 * @lc app=leetcode.cn id=2384 lang=javascript
 * @lcpr version=30204
 *
 * [2384] 最大回文数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  let resultA = "";
  let resultB = "";
//   let allZero = true
//   let max = Number.NEGATIVE_INFINITY
//   var array = num.split('')
//   array.sort((a, b) => b - a)

//   if (array[0] == 0 && array[1] == 0) return "0";
//   while (array.length) {
//     if (array[0] === array[1]) {
//         if(array[0] != 0 && allZero) allZero = false
//         let elementA = array.shift()
//         let elementB = array.shift()
//       resultA += elementA;
//       resultB = elementB + resultB;
//     } else {
//       let num = array.shift()
//       max = Math.max(max, num * 1)
//     }
//   }

//   const result = `${resultA}${max > -1 && max}${resultB}`
//   return allZero ? `${max}` : result
    let array = new Array(10).fill(0)
    for(let i = 0; i < num.length; i ++) {
        array[num[i]] ++
    }
    for(let j = 9; j >= 0; j --) {
        if (!resultA && j === 0) continue;
        const count = Math.floor(array[j] / 2)
        resultA += `${j}`.repeat(count)
        resultB = `${j}`.repeat(count) + resultB
        array[j] = array[j] % 2
    }
    let mid = ""
    for(let z = 9; z >= 0; z --) {
        if(array[z]){
            mid = `${z}`
            break
        }
    }

    return resultA + mid + resultB
};


// @lc code=end

/*
// @lcpr case=start
// "444947137"\n
// @lcpr case=end

// @lcpr case=start
// "00009"\n
// @lcpr case=end

 */
