/*
 * @lc app=leetcode.cn id=76 lang=javascript
 * @lcpr version=30204
 *
 * [76] 最小覆盖子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = new Map();
    let missing = 0
    let minLength = s.length + 1
    let start = s.length
    for (const element of t) {
        if(map.has(element)) {
            let value = map.get(element) + 1
            map.set(element, value)
        } else {
            missing ++
            map.set(element, 1)
        }   
    }

    let left = 0, right = 0
    while(right < s.length) {
        let rightChar = s[right]
        if(map.has(rightChar)) {
            let tempValue = map.get(rightChar) - 1
            map.set(rightChar, tempValue);
            if(tempValue === 0) missing --
        }
        while(missing === 0) {
            if(right - left + 1 < minLength) {
                minLength = right - left + 1
                start = left
            }
            let leftChar = s[left]
            if(map.has(leftChar)) {
                let tempLeftValue = map.get(leftChar) + 1
                map.set(leftChar, tempLeftValue)
                if(tempLeftValue > 0) missing ++
            }
            left ++
        }
        right ++
    }
    if(start === s.length) return ""
    return s.substring(start, start + minLength)
};
// @lc code=end

/*
// @lcpr case=start
// "ADOBECODEBANC"\n"ABC"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"aa"\n
// @lcpr case=end

 */