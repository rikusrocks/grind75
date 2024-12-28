/*
 * @lc app=leetcode.cn id=57 lang=javascript
 * @lcpr version=30204
 *
 * [57] 插入区间
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  let arr = [];
  let tempArr = [newInterval[0], newInterval[1]];
  let i = 0
  let length = intervals.length
  // when to start?
  // if the new interval is inside the current arr
  // means that, if the low value of the interval is not higher than the high value of the arr
  // and the high value of the interval is not lower than the low value of the arr
  while(i < length && tempArr[0] > intervals[i][1]) {
    arr.push(intervals[i])
    i++
  }
  while(i < length && tempArr[1] >= intervals[i][0]) {
    tempArr[0] = Math.min(tempArr[0], intervals[i][0])
    tempArr[1] = Math.max(tempArr[1], intervals[i][1])
    i++
  }
  arr.push(tempArr)
  while(i < length) {
    arr.push(intervals[i])
    i++
  }
  return arr;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,5]]\n[2,3]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

 */
