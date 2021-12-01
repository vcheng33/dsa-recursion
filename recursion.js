/** product: calculate the product of an array of numbers. */

function product(nums, total=1, i=0) {
  if (i === nums.length) return total;

  return nums[i] * product(nums, total, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, long=0, i=0) {
  if (i === words.length) return long;

  return long = Math.max(words[i].length, long, longest(words, long, i+1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, remaining='') {
  if (i === str.length) return remaining;

  if (i % 2 === 0) remaining += str[i];

  return everyOther (str, i+1, remaining);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return str[start] === str[end];
  }

  if (str[start] !== str[end]) return false;

  return isPalindrome(str, start + 1, end - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return - 1;

  if (arr[i] === val) return i;
  return findIndex (arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reversed = '', i = str.length - 1) {
  if (str.length === reversed.length) return reversed;

  reversed += str[i]
  return revString(str, reversed, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, result = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      gatherStrings(obj[key], result);
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right)/2);

  if (arr[mid] === val) return mid;

  if (left >= right) return -1;

  if (val > arr[mid]) {
    return binarySearch(arr, val, mid + 1, right);
  } else {
    return binarySearch(arr, val, left, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
