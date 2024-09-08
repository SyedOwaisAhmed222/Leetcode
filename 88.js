var merge = function (nums1, m, nums2, n) {
  //  [1, 2, 3, 0, 0, 0],     [2, 5, 6]
  let last = m + n - 1;
  while (m > 0 && n > 0) {
    console.log("las", last);
    if (nums2[n - 1] > nums1[m - 1]) {
      nums1[last] = nums2[n - 1];
      last -= 1;
      n -= 1;
    } else if (nums2[n - 1] < nums1[m - 1]) {
      nums1[last] = nums1[m - 1];
      last -= 1;
      m -= 1;
    } else if (nums2[n - 1] === nums1[m - 1]) {
      nums1[last] = nums1[m - 1];
      last -= 1;
      m -= 1;
    }
    console.log("---------------------");
  }

  console.log("n", n);
  while (n > 0) {
    console.log("Aaaaaaaa");
    nums1[last] = nums2[n-1];
    last -= 1;
    n -= 1;
  }
  return nums1;
};

const a = merge([0], 0, [1], 1);
console.log(a);
