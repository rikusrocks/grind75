/*
 * @lc app=leetcode.cn id=957 lang=javascript
 * @lcpr version=30204
 *
 * [957] N 天后的牢房
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    let res = [...cells]
    let keys = new Set()
    let resultMap = new Map()
    let i = 1
    let count = -1
    const nextDay = (cells) => {
        let arr = [...cells]
        for (let index = 0; index < arr.length; index++) {
            if(index === 0 || index === arr.length - 1) {
                arr[index] = 0
            } else {
                // check the input arr status, not the changed arr
                // res can be cells from this function input
                if ((cells[index - 1] === 1 && cells[index + 1] === 1) || cells[index - 1] === 0 && cells[index + 1] === 0){
                    arr[index] = 1
                } else {
                    arr[index] = 0
                }
            }
        }
        return arr
    }
    while(i <= n) {
        let next = nextDay([...res])
        let key = next.join("")
        if(keys.has(key)) {
            count = i - 1
            break
        } else {
            keys.add(key)
            res = [...next]
            resultMap.set(i, [...next])
            i++
        }
    }
    if(count === -1 || n % count === 0) {
        return res
    } else {
        return resultMap.get(n % count)
    }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,1,1,0,0,1]\n7\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,1,0,0,1,0]\n1000000000\n
// @lcpr case=end

 */

