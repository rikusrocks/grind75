/*
 * @lc app=leetcode.cn id=438 lang=javascript
 * @lcpr version=30204
 *
 * [438] 找到字符串中所有字母异位词
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let right = 0
    let result = []
    let map = new Map()
    for(let n of p) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    for (; right < p.length; right++) {
        console.log(right)  // stop at 2
        const element = s[right];
        if(map.has(element)) {
            map.set(element, map.get(element) - 1)
        }
    }
    console.log(right) //stop at 3
    // this is equal to s.length because right moves one step faster than left
    for (let left = 0; right <= s.length; left ++, right++) {
        const elementL = s[left];
        const elementR = s[right];
        if([...map.values()].every(value => value === 0)) {
            result.push(left)
        }
        if(map.has(elementL)) {
            map.set(elementL, map.get(elementL) + 1)
        }
        if(map.has(elementR)) {
            map.set(elementR, map.get(elementR) - 1)
        }
    }
    return result
};

// @lc code=end



/*
// @lcpr case=start
// "cbaebabacd"\n"bac"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n"ab"\n
// @lcpr case=end

 */

