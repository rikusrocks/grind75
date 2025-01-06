/*
 * @lc app=leetcode.cn id=721 lang=javascript
 * @lcpr version=30204
 *
 * [721] 账户合并
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  let emailToName = new Map();
  let adj = new Map();

  for (let account of accounts) {
      let name = account[0];
      for (let i = 1; i < account.length; i++) {
          let email = account[i];
          emailToName.set(email, name);
          if (!adj.has(email)) {
              adj.set(email, []);
          }
          if (i > 1) {
              let prevEmail = account[i - 1];
              adj.get(email).push(prevEmail);
              adj.get(prevEmail).push(email);
          }
      }
  }

  let visited = new Set();
  let result = [];

  for (let email of emailToName.keys()) {
      if (!visited.has(email)) {
          visited.add(email);
          let stack = [email];
          let component = [];
          while (stack.length > 0) {
              let currEmail = stack.pop();
              component.push(currEmail);
              if (adj.has(currEmail)) {
                  for (let neighbor of adj.get(currEmail)) {
                      if (!visited.has(neighbor)) {
                          visited.add(neighbor);
                          stack.push(neighbor);
                      }
                  }
              }
          }
          component.sort();
          let name = emailToName.get(email);
          result.push([name, ...component]);
      }
  }
  return result;
};
// @lc code=end



/*
// @lcpr case=start
// [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]\n
// @lcpr case=end

// @lcpr case=start
// [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]\n
// @lcpr case=end

 */

