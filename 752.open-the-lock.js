/*
 * @lc app=leetcode.cn id=752 lang=javascript
 * @lcpr version=30204
 *
 * [752] 打开转盘锁
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(deadends.indexOf(target) >= 0 || deadends.indexOf("0000") >= 0) return -1
    let deadSet = new Set(deadends)
    // maintain a visited set to reduce time and prevent duplications
    let visited = new Set()
    visited.add("0000")
    let result = 0
    // build a queue for the bfs
    let queue = ["0000"]
    // the lock changing directions
    let direction = [1, -1]
    while(queue.length > 0) {
        // bfs needs this to limit to for loop
        let queueLength = queue.length
        for(let i = 0; i< queueLength; i++) {
            // FIFO
            let str = queue.shift()
            if(str === target) return result
            let strArr = str.split("")
            //change every number
            for(let j = 0; j < 4; j++) {
                let char = strArr[j]
                for(let d = 0; d < direction.length; d++) {
                    if(direction[d] == 1) {
                        if(strArr[j] == 9) {
                            strArr[j] = 0
                        }else {
                            strArr[j] =  strArr[j] *1 + 1
                        }
                    } 
                    if(direction[d] == -1) {
                        if(strArr[j] == 0) {
                            strArr[j] = 9
                        } else {
                            strArr[j] = strArr[j] *1 - 1
                        }
                    }

                    let str = strArr.join("").toString()
                    if(!deadSet.has(str) && !visited.has(str)) {
                        queue.push(str)
                        visited.add(str)
                    }
                    // change back to the previous number
                    strArr[j] = char
                }
            }
        }
        result++
    }
    return -1
}
//console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888"))
// @lc code=end



/*
// @lcpr case=start
// ["0201","0101","0102","1212","2002"]\n"0202"\n
// @lcpr case=end

// @lcpr case=start
// ["8888"]\n"0009"\n
// @lcpr case=end

// @lcpr case=start
// ["8887","8889","8878","8898","8788","8988","7888","9888"]\n"8888"\n
// @lcpr case=end

 */

