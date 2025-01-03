/*
 * @lc app=leetcode.cn id=39 lang=javascript
 * @lcpr version=30204
 *
 * [39] 组合总和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    let result = []
    let path = []

    const backtracking = (num, sum) => {
        if(sum === target) {
            result.push([...path])
            return
        }
        for (let index = num; index < candidates.length; index++) {
            const element = candidates[index];
            if(element > target - sum) break
            path.push(element)
            sum += element
            backtracking(index, sum)
            path.pop()
            sum -= element
        }
    }
    backtracking(0, 0)
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */

