/*
 * @lc app=leetcode.cn id=1366 lang=javascript
 * @lcpr version=30204
 *
 * [1366] 通过投票对团队排名
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  let map = {};
  let ans = votes[0].split("");
  for (let index = 0; index < ans.length; index++) {
    const element = ans[index];
    map[element] = Array(ans.length).fill(0);
  }
  for (let index = 0; index < votes.length; index++) {
    const element = votes[index];
    for (let j = 0; j < element.length; j++) {
      const a = element[j];
      map[a][j]++;
    }
  }
  ans.sort((a, b) => {
    for (let index = 0; index < ans.length; index++) {
      if (map[a][index] !== map[b][index]) {
        return map[b][index] - map[a][index];
      }
    }
    return a.localeCompare(b);
  });
  return ans.join("");
};
// @lc code=end

// @lcpr-div-debug-arg-start
// funName=rankTeams()
// paramTypes= ["string[]"]
// @lcpr-div-debug-arg-end

/*
// @lcpr case=start
// ["ABC","ACB","ABC","ACB","ACB"]\n
// @lcpr case=end

// @lcpr case=start
// ["WXYZ","XYZW"]\n
// @lcpr case=end

// @lcpr case=start
// ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]\n
// @lcpr case=end

// @lcpr case=start
// ["BCA","CAB","CBA","ABC","ACB","BAC"]\n
// @lcpr case=end

// @lcpr case=start
// ["M","M","M","M"]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = rankTeams();
// @lcpr-after-debug-end
