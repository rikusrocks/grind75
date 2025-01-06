/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30204
 *
 * [54] 螺旋矩阵
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let xLength = matrix[0].length
    let yLength = matrix.length
    let result = []
    let set = new Set()
    let direction = "right"
    let x = 0, y = 0
    while(result.length < xLength * yLength) {
        result.push(matrix[y][x])
        set.add(`${x}${y}`)
        if(direction === "right") {
            if(x === xLength-1 || set.has(`${x + 1}${y}`)) {
                y ++
                direction = "bottom"
            } else {
                x ++
            }
        }
        else if(direction === "bottom") {
            if(y === yLength-1 || set.has(`${x}${y + 1}`)) {
                x --
                direction = "left"
            } else {
                y ++
            }
        } 
        else if(direction === "left") {
            if(x === 0 || set.has(`${x - 1}${y}`)) {
                y --
                direction = "top"
            } else {
                x --
            }
        } 
        else if(direction === "top") {
            if(y === 0 || set.has(`${x}${y - 1}`)) {
                x ++
                direction = "right"
            } else {
                y --
            }
        }  
    }
    return result
};
// @lc code=end

//  1 2 3 00 01 02 12 22 21 20 10 11
//  4 5 6
//  7 8 9

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */

