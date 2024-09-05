var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] && strs[j][i] === strs[0][i]) {
        continue;
      } else {
        return ans;
      }
    }
    ans += strs[0][i];
  }
  return ans;
};
const a = longestCommonPrefix(["dog","racecar","car"]);
console.log(a);
