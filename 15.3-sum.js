/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];
  for (let i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0) break;
    const element = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] * nums[right] > 0) break;
      if (nums[left] + nums[right] + element === 0) {
        result.push([nums[left], element, nums[right]]);
        while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
        while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left ++
          right --
      }
      if (nums[left] + nums[right] + element > 0) {
        right--;
      }
      if (nums[left] + nums[right] + element < 0) {
        left++
      }
      while (nums[i] === nums[i + 1]) {
        i++;
      }
    }
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [-2,0,1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
