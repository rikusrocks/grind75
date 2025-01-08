/*
 * @lc app=leetcode.cn id=310 lang=javascript
 * @lcpr version=30204
 *
 * [310] 最小高度树
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    // let result = Infinity
    // let arr = []
    // const countDepth = (n) => {
    //     let tempResult = []
    //     let queue = [n]
    //     let temp = [...edges]

    //     while(queue.length > 0) {
    //         const levelSize = queue.length;
    //         let tempArr = []
    //         for(let i = 0; i < levelSize; i ++) {
    //             let node = queue.shift()
    //             tempArr.push(node)
    //             for (let index = 0; index < temp.length;) {
    //                 const element = temp[index];
    //                 if(element.indexOf(node) >= 0) {
    //                     queue.push(element[1 - element.indexOf(node)])
    //                     temp.splice(index, 1)                        
    //                 } else {
    //                     index ++
    //                 }
    //             }
    //         }
    //         tempResult.push(tempArr)
    //     }
    //     return tempResult
    // }
    // for (let a = 0; a < n; a++) {
    //     let depth = countDepth(a).length
    //     if(depth < result) {
    //         result = depth
    //         arr = [a]
    //     }else if(depth === result) {
    //         arr.push(a)
    //     }
    // }

    // return arr
    if (n === 1) return [0]; // 单节点直接返回

    // 构建邻接表和节点度数
    const adjList = Array.from({ length: n }, () => []);
    const degree = Array(n).fill(0);

    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    // 初始化叶子节点队列
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) queue.push(i); // 找出所有叶子节点
    }

    // 拓扑排序模拟剪枝
    while (n > 2) {
        const size = queue.length;
        n -= size; // 剩余节点数量减去当前层的叶子节点数量

        for (let i = 0; i < size; i++) {
            const leaf = queue.shift();

            for (const neighbor of adjList[leaf]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    queue.push(neighbor); // 度数变为 1 的节点加入下一层
                }
            }
        }
    }

    return queue; // 剩下的节点即为最小高度树的根节点
};

//console.log("result", findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]))
// @lc code=end



/*
// @lcpr case=start
// 4\n[[1,0],[1,2],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// 6\n[[3,0],[3,1],[3,2],[3,4],[5,4]]\n
// @lcpr case=end

 */

