/*
 * @lc app=leetcode.cn id=208 lang=javascript
 * @lcpr version=30204
 *
 * [208] 实现 Trie (前缀树)
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

class TNode {
    constructor(val, isEnd){
        this.val = val
        this.isEnd = isEnd || false
        this.child = {}
    }
}

var Trie = function() {
    this.root = new TNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root
    
    for(let c of word){
        if(cur.child[c] === undefined) {
            cur.child[c] = new TNode(c)
        }
        cur = cur.child[c]
    }
        cur.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root
    for (const c of word) {
        if(!cur.child[c]) return false
        cur = cur.child[c]
    }
    return cur.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.root
    for (const c of prefix) {
        if(!cur.child[c]) return false
        cur = cur.child[c]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end



