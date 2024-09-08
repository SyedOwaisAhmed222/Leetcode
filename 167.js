var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let res = [];
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      res = [left + 1, right + 1];
      return res;
    } else if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    }
  }
  return res;
};
const a = twoSum([2, 3, 4], 6);
console.log(a);
