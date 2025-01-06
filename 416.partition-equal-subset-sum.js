/*
 * @lc app=leetcode.cn id=416 lang=javascript
 * @lcpr version=30204
 *
 * [416] 分割等和子集
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let count = 0;
  let memo = new Map()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    count += element;
  }
  if (count % 2 !== 0) return false;
  let target = count / 2;
  const dfs = (sum, i) => {
    // when to jump other of recursion
    if (sum > target || i === nums.length) {
      return false;
    }
    const key = sum + "$" + i
    if(memo.has(key)) {
        return memo.get(key)
    }
    if (sum === target) return true;
    // choose this num or pass to the next, you only have two choices in one i
    const res = dfs(sum + nums[i], i + 1) || dfs(sum, i + 1);
    // do a memo to save the current results
    memo.set(key, res)
    return res
  };
  return dfs(0, 0);
};
// @lc code=end

/*
// @lcpr case=start
// [1,5,11,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,5]\n
// @lcpr case=end

 */
