/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30204
 *
 * [1] 两数之和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
//   let copy = [...nums];
//   nums.sort((a, b) => a - b);
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     let targetNum = target - element;
//     if(targetNum === element) {
//         let tempIndex = copy.indexOf(element)
//         copy[tempIndex] = null;
//         return [tempIndex, copy.indexOf(element)]
//     }
//     let left = index,
//       right = nums.length - 1;
//     while (left <= right) {
//       let mid = Math.floor((right + left) / 2);
//       if (nums[mid] === targetNum) {
//         return [copy.indexOf(element), copy.indexOf(nums[mid])];
//       } else if (targetNum > nums[mid]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const targerNum = target - element
        if(map.has(targerNum)) {
            return [map.get(targerNum), index]
        } else {
            map.set(element, index)
        }
    }
};

// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
