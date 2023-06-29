/*
 * @lc app=leetcode.cn id=860 lang=javascript
 * @lcpr version=21909
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let result = new Map()
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5) {
            result.get(5) > 0 ? result.set(5, result.get(5) + 1) : result.set(5, 1)
        } else if(bills[i] === 10) {
            if(result.get(5) >= 1) {
                result.get(10) > 0 ? result.set(10, result.get(10) + 1) : result.set(10, 1)
                result.set(5, result.get(5) - 1)
            } else {
                return false
            }
        } else if(bills[i] === 20) {
            if(result.get(10) >= 1 && result.get(5) >= 1) {
                result.set(10, result.get(10) - 1)
                result.set(5, result.get(5) - 1)
            } else if(result.get(5) >= 3) {
                result.set(5, result.get(5) - 3)
            } else {
                return false
            }
        }
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// [5,5,5,10,20]\n
// @lcpr case=end

// @lcpr case=start
// [5,5,10,10,20]\n
// @lcpr case=end

 */

