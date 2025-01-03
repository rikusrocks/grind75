/*
 * @lc app=leetcode.cn id=56 lang=javascript
 * @lcpr version=30204
 *
 * [56] 合并区间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    for (let index = 0; index < intervals.length - 1;) {
        let temp = []
        if(intervals[index][0] > intervals[index + 1][1]) {
            let t = intervals[index]
            intervals[index] = intervals[index + 1]
            intervals[index + 1] = t
        }
        if(intervals[index][1] >= intervals[index + 1][1]) {
            let min = intervals[index][0] >= intervals[index + 1][0] ? intervals[index + 1][0] : intervals[index][0]
            temp = [min, intervals[index][1]]
            intervals.splice(index, 2 , temp)
            
        } else if (intervals[index][1] >= intervals[index + 1][0]){
            let min = intervals[index][0] >= intervals[index + 1][0] ? intervals[index + 1][0] : intervals[index][0]
            temp = [min, intervals[index + 1][1]]
            intervals.splice(index, 2 , temp)
        } else {
            index ++
        }
    }
    return intervals
};

// @lc code=end



/*
// @lcpr case=start
// [[1,4],[0,2],[3,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */

