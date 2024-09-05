var containsDuplicate = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return true;
    } else {
      map[nums[i]] = i;
    }
  }
  return false;
};
const a = containsDuplicate([1, 2, 3, 1]);
console.log(a);
