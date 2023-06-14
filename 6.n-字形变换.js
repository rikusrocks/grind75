/*
 * @lc app=leetcode.cn id=6 lang=javascript
 * @lcpr version=21909
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let map = new Map()
    for(let i = 0; i < s.length; i ++) {
        let number = 2 * numRows - 2
        const x = i % number
        let index = Math.min(x, number - x)
        let string = map.get(index) ? map.get(index) : ''
        string += s[i]
        map.set(index, string)
    }
    let result = ''
    map.forEach((res, key) => {
        console.log(res, key)
        result += res
    })
    return result
};
// @lc code=end



/*
// @lcpr case=start
// "PAYPALISHIRING"\n3\n
// @lcpr case=end

// @lcpr case=start
// "PAYPALISHIRING"\n4\n
// @lcpr case=end

// @lcpr case=start
// "A"\n1\n
// @lcpr case=end

 */

