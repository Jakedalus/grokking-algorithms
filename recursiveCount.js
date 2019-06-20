function recursiveCount(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  
  return 1 + recursiveCount(arr.slice(1));
}

console.log("[1, 2, 3, 4, 5]:", recursiveCount([1, 2, 3, 4, 5])); // 5
console.log("[11, 21, 3, 4, -5]:", recursiveCount([11, 21, 3, 4, -5, 7, 2, 23, 4])); // 9