function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  
//  console.log(low, high);
  
  while (low <= high) {
    let mid = Math.round((low + high) / 2); // !!Javascript doesn't round like Python does
    let guess = list[mid];
//    console.log("[", low, ", ", high, "]: [", mid, "] ", guess);
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    } 
  }
  
  return null;
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));