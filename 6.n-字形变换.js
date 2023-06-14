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
    /**
     * i = 0 0 % 6 = 0  6 - 0 = 6               | i = 6 6 % 6 = 0 6 - 6 = 0
     * i = 1 1 % 6 = 1  6 - 1 = 5        | i = 5 5 % 6 = 5 6 - 5 = 1           
     * i = 2 2 % 6 = 2  6 - 2 = 4 | i = 4 4 % 6 = 4 6 - 4 = 2
     * i = 3 3 % 6 = 3
     */
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

