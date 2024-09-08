let isAlphaNum = (str) => {
  if (
    (str.charCodeAt(0) >= "A".charCodeAt(0) &&
      str.charCodeAt(0) <= "Z".charCodeAt(0)) ||
    (str.charCodeAt(0) >= "a".charCodeAt(0) &&
      str.charCodeAt(0) <= "z".charCodeAt(0)) ||
    (str.charCodeAt(0) >= "0".charCodeAt(0) &&
      str.charCodeAt(0) <= "9".charCodeAt(0))
  ) {
    return true;
  } else {
    return false;
  }
};
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isAlphaNum(s[left])) {
      left += 1;
      continue;
    }
    if (!isAlphaNum(s[right])) {
      right -= 1;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left += 1;
      right -= 1;
    }
  }
  return true;
};
const a = isPalindrome("A man, a plan, a canal: Panama");
console.log(a);
