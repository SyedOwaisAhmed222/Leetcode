var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if ((nums2[i] !== undefined) && (nums2[i] < nums2[j])) {
        map[nums2[i]] = nums2[j];
        break;
      }
    }
  }
  console.log(map);
  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] != undefined) {
      ans.push(map[nums1[i]]);
    } else {
      ans.push(-1);
    }
  }
  return ans;
};
const a = nextGreaterElement([0, 1, 2], [1, 3, 4,0, 2, 9]);
console.log(a);
