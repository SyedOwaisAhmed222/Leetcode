var majorityElement = function (nums) {
  const map = {};
  let maxCount = 0;
  let me = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] != undefined) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] > maxCount) {
      maxCount = map[nums[i]];
      me = nums[i];
    }
  }

  return me;
};
const a = majorityElement([3,2,3]);
console.log(a);
