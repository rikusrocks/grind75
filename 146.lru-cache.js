/*
 * @lc app=leetcode.cn id=146 lang=javascript
 * @lcpr version=30204
 *
 * [146] LRU 缓存
 * 实现哈希表
 * 实现双链表
let LRUCache = function(capacity) {
    初始化容量，用于判断LRU是否已满
    初始化哈希表映射，用于查找节点
    初始化双链表，用于插入、删除节点
};
LRUCache.prototype.get = function(key) {
    if(哈希查找 不存在){
        return -1;
    }else{
        将此节点置于开头，为最近访问节点
        return 节点值
    }
}
LRUCache.prototype.put = function(key, value) {
    if(哈希查找 已经存在){
        删除旧的数据
        
    }else{
        if(LRU 即 双链表已满){
            删除尾节点
            更新哈希映射值，并将更新后的节点置于开头
        }
        将新节点置于开头
        新建新节点的哈希映射
    }
}
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} capacity
 * 
 */

class Node {
    constructor(key = 0, val = 0) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}
class LRUCache {
    constructor(capacity) {
        this.limit = capacity
        this.cacheMap = new Map()
        this.dummy = new Node()
        this.dummy.prev = this.dummy
        this.dummy.next = this.dummy
    }
    moveToHead(node) {
            node.prev = this.dummy
            node.next = this.dummy.next
            this.dummy.next = node
            this.dummy.prev = node 
    }

    delete(node) {
            node.prev.next = node.next
            node.next.prev = node.prev
    }

    getNode(key) {
        if(!this.cacheMap.has(key)) {
            return null
        }
        let node = this.cacheMap.get(key)
        this.delete(node)
        this.moveToHead(node)
        return node
    }

    put(key, value) {
        let node = this.cacheMap.get(key)
        if(node) {
            node.val = value
            return
        }
        let nodeToAdd = new Node(key, value)
        this.moveToHead(nodeToAdd)
        this.cacheMap.set(key, nodeToAdd)
        if(this.cacheMap.size > this.limit) {
            let lastNode = this.dummy.prev
            this.delete(lastNode)
            this.cacheMap.delete(lastNode.key)
        }
    }

    get(key) {
        let node = this.getNode(key)
        return node || -1
    }
};

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     return this.getNode(key).val || -1
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     let node = this.cacheMap.get(key)
//     if(node) {
//         node.val = value
//         return
//     }
//     node = new Node(key, value)
//     this.moveToHead(node)
//     if(this.cacheMap.size > this.limit) {
//         let theNodeToDelete = this.dummy.prev
//         this.deleteNode(theNodeToDelete)
//         this.cacheMap.delete(theNodeToDelete.key)
//     }
// };

// LRUCache.prototype.deleteNode = (node) => {
//     node.prev.next = node.next
//     node.next.prev = node.prev
// }

// LRUCache.prototype.moveToHead = (node) => {
//     node.prev = this.dummy
//     node.next = this.dummy.next
//     node.next.prev = node
//     node.prev.next = node
// }

// LRUCache.prototype.getNode = (key) => {
//     if(!this.cacheMap.has(key)) {
//         return null
//     }
//     let node = this.cacheMap.get(key)
//     this.deleteNode(node)
//     this.moveToHead(node)
//     return node
// }

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// @lcpr case=start
// ["LRUCache","put","put","get","put","get","put","get","get","get"] \n [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]] \n
// @lcpr case=end

