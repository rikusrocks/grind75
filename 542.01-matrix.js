/*
 * @lc app=leetcode.cn id=542 lang=javascript
 * @lcpr version=30204
 *
 * [542] 01 矩阵
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = []
    let xLength = mat.length
    let yLength = mat[0].length
    // this direction is an array of tags, for right, left, top, bottom directions
    let direction = [[0, -1], [-1, 0], [0, 1], [1, 0]]
    for (let i = 0; i < xLength; i++) {
        for (let j = 0; j < yLength; j++) {
            // iterate the matrix, and push all cells with 0 to the queue
            // cells is not 0 mark with -1, means these cells haven't been visited, for future skip
            const element = mat[i][j];
            if(element === 0) {
                queue.push([i, j])
            } else {
                mat[i][j] = -1
            }
        }  
    }
    while(queue.length > 0) {
        // get the first cell in the queue
        let cell = queue.shift()
        for (let d = 0; d < direction.length; d++) {
            const element = direction[d];
            // move to the next cell following the direction
            let x = cell[0] + element[0]
            let y = cell[1] + element[1]
            // if this cell haven't been visited, means it has a value, and is not 0, and x y is with in the range
            // change the cell value to the previous cell plus one
            if(x < xLength && x >=0 && y < yLength && y>=0 && mat[x][y] === -1){
                mat[x][y] = mat[cell[0]][cell[1]] + 1
                queue.push([x, y])
            }
        }
    }
    return mat
};
// @lc code=end



/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,0],[0,1,0],[1,1,1]]\n
// @lcpr case=end

 */

