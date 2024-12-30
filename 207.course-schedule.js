/*
 * @lc app=leetcode.cn id=207 lang=javascript
 * @lcpr version=30204
 *
 * [207] 课程表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // get the dependencies
    // push the nodes that no nodes depend on them to a queue
    // delete the node that doesn't depend on any course, and counter plus one
    // then reduce 1 count for the nodes depends on this node
    // push the nodes to the queue if no nodes depend on these nodes
    // when queue has no node, if counter not equals to the courses, means some nodes have been visited
    let dep = new Map()
    let courseArr = new Array(numCourses).fill(0)
    prerequisites.forEach((course) => {
        courseArr[course[0]] += 1
        if(dep.has(course[1])) {
            let prev = dep.get(course[1])
            prev.push(course[0])
            dep.set(course[1], prev)
        } else {
            dep.set(course[1], [course[0]])
        }
    })
    let count = 0
    let queue = []

    courseArr.forEach((course, i) => {
        if(course === 0) {
            queue.push(i)
        }
    })
    
    while(queue.length > 0) {
        let course = queue.shift()
        count++
        let dependencies = dep.get(course)
        if(dependencies && dependencies.length > 0) {
            
            dependencies.forEach(de => {
                courseArr[de]--
                if(courseArr[de] ===0) {
                    queue.push(de)
                }
            })
        }
    }
    return count === numCourses
};
// @lc code=end



/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 3\n[[1,0],[0,2], [1,2]]\n
// @lcpr case=end

 */

