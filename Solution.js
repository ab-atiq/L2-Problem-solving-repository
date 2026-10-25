/* ==========================================================
   STN-7 Problem Solving Assessment - All 20 solutions
   Run with:  node solutions.js
   Each problem is followed by 2-3 test cases.
   ========================================================== */

/* ---------- Problem 1: Staircase ----------
   Time: O(n^2) (output size), Space: O(n^2) */
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

console.log("--- Problem 1: Staircase ---");
console.log(staircase(4));
console.log(staircase(1));
console.log(staircase(6));

/* ---------- Problem 2: Grading Students ----------
   Time: O(n), Space: O(n) */
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  return grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
};

console.log("--- Problem 2: Grading Students ---");
console.log(gradingStudents([73, 67, 38, 33])); // [75, 67, 40, 33]
console.log(gradingStudents([84, 29, 57])); // [85, 29, 57]
console.log(gradingStudents([100, 37, 99])); // [100, 37, 100]

/* ---------- Problem 3: Time Conversion ----------
   Time: O(1), Space: O(1) */
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  const period = s.slice(-2).toUpperCase();
  const rest = s.slice(2, -2); // ":MM:SS"
  let hour = parseInt(s.slice(0, 2), 10);

  if (period === "AM") {
    if (hour === 12) hour = 0;
  } else if (hour !== 12) {
    hour += 12;
  }
  return String(hour).padStart(2, "0") + rest;
};

console.log("--- Problem 3: Time Conversion ---");
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:00:00AM")); // 00:00:00
console.log(timeConversion("12:30:45PM")); // 12:30:45

/* ---------- Problem 4: String Repeat ----------
   Time: O(n * |s|), Space: O(n * |s|) */
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  let result = "";
  for (let i = 0; i < n; i++) result += s;
  return result;
};

console.log("--- Problem 4: String Repeat ---");
console.log(JSON.stringify(repeatStr(3, "ha"))); // "hahaha"
console.log(JSON.stringify(repeatStr(0, "hello"))); // ""
console.log(JSON.stringify(repeatStr(4, "a"))); // "aaaa"

/* ---------- Problem 5: Reversed Strings ----------
   Time: O(n), Space: O(n) */
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
};

console.log("--- Problem 5: Reversed Strings ---");
console.log(JSON.stringify(solution("world"))); // "dlrow"
console.log(JSON.stringify(solution("hello"))); // "olleh"
console.log(JSON.stringify(solution(""))); // ""

/* ---------- Problem 6: Sum of Positive ----------
   Time: O(n), Space: O(1) */
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  let sum = 0;
  for (const x of arr) if (x > 0) sum += x;
  return sum;
};

console.log("--- Problem 6: Sum of Positive ---");
console.log(positiveSum([1, -4, 7, 12])); // 20
console.log(positiveSum([-1, -2, 0, -5])); // 0
console.log(positiveSum([])); // 0

/* ---------- Problem 7: Grasshopper - Summation ----------
   Time: O(1) using n(n+1)/2, Space: O(1) */
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

console.log("--- Problem 7: Summation ---");
console.log(summation(8)); // 36
console.log(summation(1)); // 1
console.log(summation(100)); // 5050

/* ---------- Problem 8: Convert a Boolean to a String ----------
   Time: O(1), Space: O(1) */
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return b ? "true" : "false";
};

console.log("--- Problem 8: Boolean to String ---");
console.log(JSON.stringify(booleanToString(true))); // "true"
console.log(JSON.stringify(booleanToString(false))); // "false"

/* ---------- Problem 9: Fizz Buzz ----------
   Time: O(n), Space: O(n) */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};

console.log("--- Problem 9: Fizz Buzz ---");
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(1));

/* ---------- Problem 10: Running Sum of 1D Array ----------
   Time: O(n), Space: O(n) */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = new Array(nums.length);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }
  return result;
};

console.log("--- Problem 10: Running Sum ---");
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]

/* ---------- Problem 11: Richest Customer Wealth ----------
   Time: O(m*n), Space: O(1) */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
};

console.log("--- Problem 11: Richest Customer Wealth ---");
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ]),
); // 6
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
); // 10
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ]),
); // 17

/* ---------- Problem 12: Remove Duplicates from Sorted Array ----------
   Two pointers. Time: O(n), Space: O(1) */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log("--- Problem 12: Remove Duplicates ---");
(function () {
  const a = [1, 1, 2];
  const k1 = removeDuplicates(a);
  console.log(k1, a.slice(0, k1)); // 2 [1, 2]

  const b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k2 = removeDuplicates(b);
  console.log(k2, b.slice(0, k2)); // 5 [0, 1, 2, 3, 4]

  const c = [5];
  const k3 = removeDuplicates(c);
  console.log(k3, c.slice(0, k3)); // 1 [5]
})();

/* ---------- Problem 13: Contains Duplicate ----------
   Time: O(n), Space: O(n) */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
};

console.log("--- Problem 13: Contains Duplicate ---");
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

/* ---------- Problem 14: Move Zeroes ----------
   Time: O(n), Space: O(1) */
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[insertPos++] = nums[i];
  }
  while (insertPos < nums.length) nums[insertPos++] = 0;
};

console.log("--- Problem 14: Move Zeroes ---");
(function () {
  const a = [0, 1, 0, 3, 12];
  moveZeroes(a);
  console.log(a); // [1, 3, 12, 0, 0]

  const b = [0, 0, 1];
  moveZeroes(b);
  console.log(b); // [1, 0, 0]

  const c = [1, 2, 3];
  moveZeroes(c);
  console.log(c); // [1, 2, 3]
})();

/* ---------- Problem 15: Merge Sorted Array ----------
   Fill from the back. Time: O(m+n), Space: O(1) */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
};

console.log("--- Problem 15: Merge Sorted Array ---");
(function () {
  const a = [1, 2, 3, 0, 0, 0];
  merge(a, 3, [2, 5, 6], 3);
  console.log(a); // [1, 2, 2, 3, 5, 6]

  const b = [1];
  merge(b, 1, [], 0);
  console.log(b); // [1]

  const c = [0];
  merge(c, 0, [1], 1);
  console.log(c); // [1]
})();

/* ---------- Problem 16: 3Sum ----------
   Sort + two pointers. Time: O(n^2), Space: O(1) extra (besides output) */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arr = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log("--- Problem 16: 3Sum ---");
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4]))); // [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0, 1, 1]))); // []
console.log(JSON.stringify(threeSum([0, 0, 0]))); // [[0,0,0]]

/* ---------- Problem 17: Plus One ----------
   Time: O(n), Space: O(1) (O(n) only when all digits are 9) */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  result.unshift(1);
  return result;
};

console.log("--- Problem 17: Plus One ---");
console.log(plusOne([1, 2, 9])); // [1, 3, 0]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]

/* ---------- Problem 18: Reverse String ----------
   Two pointers. Time: O(n), Space: O(1) */
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
};

console.log("--- Problem 18: Reverse String ---");
(function () {
  const a = ["h", "e", "l", "l", "o"];
  reverseString(a);
  console.log(a); // ["o","l","l","e","h"]

  const b = ["H", "a", "n", "n", "a", "h"];
  reverseString(b);
  console.log(b); // ["h","a","n","n","a","H"]

  const c = ["a"];
  reverseString(c);
  console.log(c); // ["a"]
})();

/* ---------- Problem 19: Length of Last Word ----------
   Scan from the end. Time: O(n), Space: O(1) */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

console.log("--- Problem 19: Length of Last Word ---");
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

/* ---------- Problem 20: Longest Common Prefix ----------
   Time: O(S) where S = total characters, Space: O(1) */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== first[i]) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};

console.log("--- Problem 20: Longest Common Prefix ---");
console.log(JSON.stringify(longestCommonPrefix(["flower", "flow", "flight"]))); // "fl"
console.log(JSON.stringify(longestCommonPrefix(["dog", "racecar", "car"]))); // ""
console.log(
  JSON.stringify(
    longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
  ),
); // "inter"
