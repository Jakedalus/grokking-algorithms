function recursiveSum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  
  return arr[0] + recursiveSum(arr.slice(1));
}

console.log("[1, 2, 3, 4, 5]:", recursiveSum([1, 2, 3, 4, 5])); // 15
console.log("[11, 21, 3, 4, -5]:", recursiveSum([11, 21, 3, 4, -5])); // 34

