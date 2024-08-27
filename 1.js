var twoSum = function (nums, target) {
  const map = {};
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j++) {
    if (map[target - nums[j]] && map[target - nums[j]] !== j) {
      return [j, map[target - nums[j]]];
    }
  }
  return [];
};

// var twoSum = function (nums, target) {
//   res = []
//   for (let i = 0; i < nums.length - 1; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//               res = [i, j];
//               return res
//           }
//       }

//   }
//   return res
// };

numbers = [1, 3, 4, 2];
const result = twoSum(numbers, 6);
console.log(result);
