/*
 * @lc app=leetcode.cn id=733 lang=javascript
 * @lcpr version=30204
 *
 * [733] 图像渲染
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] === color) return image
    const preColor = image[sr][sc]
    image[sr][sc] = color
    const m = image.length
    const n = image[0].length
    let queue = [[sr,sc]]
    while(queue.length > 0) {
        let curPoint = queue.pop()
        let x = curPoint[0]
        let y = curPoint[1]
        if(0 <= x -1 && image[x-1][y] === preColor) {
            image[x-1][y] = color
            queue.push([x-1, y])
        }
        if(0 <= y -1 && image[x][y-1] === preColor) {
            image[x][y-1] = color
            queue.push([x, y-1])
        }
        if(y + 1 < n && image[x][y+1] === preColor) {
            image[x][y+1] = color
            queue.push([x, y+1])
        }
        if(x + 1 < m && image[x+1][y] === preColor) {
            image[x+1][y] = color
            queue.push([x+1, y])
        }
    }
    return image
};
// @lc code=end



/*
// @lcpr case=start
// [[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2\n
// @lcpr case=end

// @lcpr case=start
// [[0,0,0],[0,0,0]]\n0\n0\n0\n
// @lcpr case=end

 */

