/*
 * @lc app=leetcode.cn id=130 lang=javascript
 * @lcpr version=30204
 *
 * [130] 被围绕的区域
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const check = (i, j) => {
    const queue = [[i, j]];
    board[i][j] = "No"
    while(queue.length) {
        const cur = queue.shift()
        for(const d of direction) {
            let left = cur[0] + d[0]
            let right = cur[1] + d[1]
            if(left < 0 || left === board.length || right < 0 || right === board[0].length) {
                continue;
            }
            if(board[left][right] === "O") {
                queue.push([left, right])
                board[left][right] = "No"
            }
        }
    }
  }

  for(let i = 0; i < board.length; i ++) {
    for(let j = 0; j < board[i].length; j ++) {
        if(i == 0 || i == board.length - 1 || j ==0 || j === board[i].length - 1 ) {
            if(board[i][j] == "O") {
                check(i, j)
            }
        }
    }
  }

  for(let i = 0; i < board.length; i ++) {
    for(let j = 0; j < board[i].length; j ++) {
        if(board[i][j] == "No") {
            board[i][j] = "O"
        } else if(board[i][j] == "O") {
            board[i][j] = "X"
        }
    }
  }

};
// @lc code=end

/*
// @lcpr case=start
// [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]\n
// @lcpr case=end

// @lcpr case=start
// [["O","O"],["O","O"]]\n
// @lcpr case=end

 */
