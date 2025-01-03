/*
 * @lc app=leetcode.cn id=200 lang=javascript
 * @lcpr version=30204
 *
 * [200] 岛屿数量
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let xLength = grid[0].length
    let yLength = grid.length
    const turnLandToSea = (x, y, grid) => {
        if(x >= xLength || y >= yLength || x < 0 || y < 0 || grid[y][x] === "0") return
        grid[y][x] = "0"
        turnLandToSea(x + 1, y, grid)
        turnLandToSea(x - 1, y, grid)
        turnLandToSea(x, y + 1, grid)
        turnLandToSea(x, y - 1, grid)    
    }
    for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
            if(grid[y][x] === "1") {
                count ++
            }
            turnLandToSea(x, y, grid)
        }    
    }
    return count
};
// @lc code=end



/*
// @lcpr case=start
// [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]\n
// @lcpr case=end

// @lcpr case=start
// [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]\n
// @lcpr case=end

 */

