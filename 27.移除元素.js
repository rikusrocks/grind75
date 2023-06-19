/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=21909
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {  
        for(let i = 0; i < nums.length;) {
            if(nums[i] === val) {
                nums.splice(i,1)
            } else {
                i ++
            }
        }
        return nums.length
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2,2,3,0,4,2]\n2\n
// @lcpr case=end

 */

