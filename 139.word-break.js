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
    const wordSet = new Set(wordDict); // Use a Set for faster lookups
    const memo = {}; // Memoization to store results for substrings

    const backtrack = (str) => {
        if (str in memo) return memo[str]; // Return memoized result
        if (wordSet.has(str)) return (memo[str] = true); // If the whole string is a word

        for (let i = 1; i <= str.length; i++) {
            const prefix = str.substring(0, i);
            if (wordSet.has(prefix)) { // Check if the prefix is a valid word
                const suffix = str.substring(i);
                if (backtrack(suffix)) {
                    return (memo[str] = true); // If suffix is valid, the whole string is valid
                }
            }
        }

        return (memo[str] = false); // Store the result in memo
    };

    return backtrack(s);
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

