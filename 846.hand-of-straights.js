/*
 * @lc app=leetcode.cn id=846 lang=javascript
 * @lcpr version=30204
 *
 * [846] 一手顺子
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false
    hand.sort((a, b) => a - b)
    let map = new Map()
    for (const element of hand) {
        map.set(element, (map.get(element) || 0) + 1)
    }
    for (const element of hand) {
        // becasuse it is not deleting the element in the hand, 
        // if there is not this key in the hand, 
        // means that this key should not be considered
        if(!map.get(element)) continue;
        for(let i = 0; i< groupSize; i++) {
            let num = element + i
            if(!map.has(num)) {
                return false
            }
            map.set(num, map.get(num) - 1)
            if(map.get(num) === 0) {
                // remove the key if is key should not exist anymore
                map.delete(num)
            }
        }
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,6,2,3,4,7,8]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n4\n
// @lcpr case=end

 */

