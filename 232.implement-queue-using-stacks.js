/*
 * @lc app=leetcode.cn id=232 lang=javascript
 * @lcpr version=30204
 *
 * [232] 用栈实现队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MyQueue = function() {
    this.queue = []
    this.cacheQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.cacheQueue.length > 0) {
        return this.cacheQueue.pop()
    }
    while(this.queue.length > 0) {
        this.cacheQueue.push(this.queue.pop())
    }
    return this.cacheQueue.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let int = this.pop()
    this.cacheQueue.push(int)
    return int
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0 && this.cacheQueue.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MyQueue", "push", "push", "peek", "pop", "empty"] \n [[], [1], [2], [], [], []]\n
// @lcpr case=end

 */

