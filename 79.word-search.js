/*
 * @lc app=leetcode.cn id=79 lang=javascript
 * @lcpr version=30204
 *
 * [79] 单词搜索
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const dfs = (i, j, k) => {
    if (word.length === k) return true;
    if (i >= board.length || i < 0 || j >= board[0].length || j < 0)
      return false;
    if (board[i][j] !== word[k]) return false;
    const temp = board[i][j];
    board[i][j] = "#";
    const result =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    if (result) return true;
    board[i][j] = temp;
    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const element = board[i][j];
      if (element === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

// @lc code=end

/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */
