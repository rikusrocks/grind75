/*
 * @lc app=leetcode.cn id=140 lang=javascript
 * @lcpr version=30204
 *
 * [140] 单词拆分 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const length = s.length
    const wordSet = new Set(wordDict)
    const memo = new Map()
    const dfs = (start) => {
        if(memo.has(start)) return memo.get(start)
        if(start === length) return [[]]
        const res = []
        // in this for loop, if the word is not in the dict, 
        // it will proceed to the next char, and if i reach the limit, 
        // it will jump out of the for loop, and return [] as res
        // and if restResponse is [], it won't trigger the for of loop,
        // means that, if the rest of the word cannot be covered by the dict words, 
        // the word will not be pushed to the res
        for(let i = start + 1; i <= length; i ++) {
            const word = s.substring(start, i)
            if(wordSet.has(word)) {
                const restResponse = dfs(i)
                for(const restWords of restResponse) {
                    res.push([word].concat(restWords))
                }
            }
        }
        memo.set(start, res)
        return res
    }

    return dfs(0).map(words => words.join(" "))
};
// @lc code=end



/*
// @lcpr case=start
// "catsanddog"\n["cat","cats","and","sand","dog"]\n
// @lcpr case=end

// @lcpr case=start
// "pineapplepenapple"\n["apple","pen","applepen","pine","pineapple"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats","dog","sand","and","cat"]\n
// @lcpr case=end

 */

