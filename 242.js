var isAnagram = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] && map[t[i]] >= 1) {
      map[t[i]] -= 1;
      count += 1;
    } else {
      return false;
    }
  }
  if (count === s.length) {
    return true;
  } else {
    return false;
  }
};

const a = isAnagram("anagram", "ngaram");
console.log(a);
