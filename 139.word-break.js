/*
 * @lc app=leetcode.cn id=139 lang=javascript
 * @lcpr version=30204
 *
 * [139] 单词拆分
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const length = s.length
    const wordSet = new Set(wordDict); // Use a Set for faster lookups
    const memo = new Map(); // Memoization to store results for substrings
    const maxLength = Math.max(...wordDict.map(word => word.length))
    // const dfs = (start) => {
    //     if(start === length) return true
    //     if(memo.has(start)) return memo.get(start)
    //     for(let i = start + 1; i <= length; i ++)
    //     for(let i = start + 1; i < start + maxLength + 1; i ++) {
    //         const word = s.substring(start, i)
    //         if(wordSet.has(word) && dfs(i)) {
    //             memo.set(start, true)
    //             return true
    //         }
    //     }
    //     memo.set(start, false)
    //     return false
    // }
    // return dfs(0)

    // const visited = new Set()
    // let queue = []
    // queue.push(0)
    // while(queue.length) {
    //     const start = queue.shift()
    //     if(visited.has(start)) continue
    //     visited.add(start)
    //     for(let i = start + 1; i <= length; i ++) {
    //         const word = s.substring(start, i)
    //         if(wordSet.has(word)) {
    //             if(i < length) {
    //                 queue.push(i)
    //             } else {
    //                 return true
    //             }
    //         }
    //     }
    // }
    // return false

    const dp = new Array(length + 1).fill(false)
    dp[0] = true
    for(let i = 1; i <= length; i ++) {
        for(let j = i - 1; j >=0; j --) {
            if (dp[i] == true) break;
            if (dp[j] == false) continue;
            const word = s.substring(j, i)
            if(wordSet.has(word) && dp[j]) {
                dp[i] = true
                break
            }
        }
    }

    return dp[length]
};



// var wordBreak = function(s, wordDict) {
//     let result = false;
    
//     // If the entire string matches a word in the dictionary, return true immediately
//     if (wordDict.indexOf(s) >= 0) return true;

//     const backtrack = (str) => {
//         // Try all possible prefixes of the string
//         for (let i = 1; i <= str.length; i++) {
//             const prefix = str.substring(0, i);
//             const suffix = str.substring(i);

//             if (wordDict.indexOf(prefix) >= 0) { // Check if the prefix is valid
//                 if (suffix === "" || backtrack(suffix)) { 
//                     return true; // If the suffix is valid, the whole string is valid
//                 }
//             }
//         }

//         return false; // If no valid split is found
//     };

//     return backtrack(s);
// }
// @lc code=end



/*
// @lcpr case=start
// "cats"\n["cat", "cats"]\n
// @lcpr case=end

// @lcpr case=start
// "applepenapple"\n["apple", "pen"]\n
// @lcpr case=end

// @lcpr case=start
// "catsandog"\n["cats", "dog", "sand", "and", "cat"]\n
// @lcpr case=end

 */

