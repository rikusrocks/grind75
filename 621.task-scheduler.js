/*
 * @lc app=leetcode.cn id=621 lang=javascript
 * @lcpr version=30204
 *
 * [621] 任务调度器
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Map()
    for(let t of tasks){
        map.set(t, (map.get(t) || 0)  + 1)
    } 
    let max = Math.max(...map.values())
    let k = 0 
    for(let [,v] of map){
        if(max === v) k++
    }
    return  Math.max(tasks.length, (max - 1)*(n + 1) + k)
};
  
// @lc code=end

/*
// @lcpr case=start
// ["A","A","A","B","B","B"]\n2\n
// @lcpr case=end

// @lcpr case=start
// ["A","C","A","B","D","B"]\n1\n
// @lcpr case=end

// @lcpr case=start
// ["A","A","A","B","B","B"]\n3\n
// @lcpr case=end

 */
