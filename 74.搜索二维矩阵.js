/*
 * @lc app=leetcode.cn id=74 lang=javascript
 * @lcpr version=21909
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //let index
    for(let i = 0; i < matrix.length; i ++) {
        if(matrix[i][0] <= target && matrix[i][matrix[0].length - 1] >= target) {
            let start = 0;
            let end = matrix[i].length - 1;
            if(start === end) return target === matrix[i][start]
            while(start <= end) {
                let mid = Math.floor((start + end) * 0.5)
                if(target === matrix[i][mid] || target === matrix[i][target] || target === matrix[i][end]) {
                    return true
                } else if(target < matrix[i][mid]) {
                    end = mid - 1
                } else {
                    start = mid + 1
                }
            }
        }
    }
    return false
};
// @lc code=end



/*
// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13\n
// @lcpr case=end

// @lcpr case=start
// [[1,3]]\n3\n
// @lcpr case=end
 */

