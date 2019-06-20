function recursiveMax(arr) {
//  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  
  return arr[0] > recursiveMax(arr.slice(1)) ? arr[0] : recursiveMax(arr.slice(1));
}
                                                                     
console.log("[1, 2, 3, 4, 5]:", recursiveMax([1, 2, 3, 4, 5])); // 5
console.log("[11, 21, 3, 4, -5, 7, 2, 23, 4]:", recursiveMax([11, 21, 3, 4, -5, 7, 2, 23, 4])); // 23