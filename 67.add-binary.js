/*
 * @lc app=leetcode.cn id=67 lang=javascript
 * @lcpr version=30204
 *
 * [67] 二进制求和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let sumA = "0b"+ a
    // let sumB = "0b" + b
    // let result = BigInt(sumA) + BigInt(sumB)
    // return result.toString(2)
    let arrA = a.split("")
    let arrB = b.split("")
    let lengthA = arrA.length - 1
    let lengthB = arrB.length - 1
    let d = 0
    let result = ''
    while(lengthA >= 0 || lengthB >= 0) {
        let sum = d
        sum += lengthA >= 0 ? parseInt(arrA[lengthA]) : 0
        sum += lengthB >= 0 ? parseInt(arrB[lengthB]) : 0
        result += sum % 2
        d = Math.floor(sum/2)
        lengthA --
        lengthB --
    }
    result += d === 1 ? d : ""
    return result.split("").reverse().join("")
};
// @lc code=end



/*
// @lcpr case=start
// "0"\n"0"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */

