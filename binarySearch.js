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

function recursiveBinarySearch(list, low, high, item) {
//  console.log("high - low:", high-low);
  if (high-low <= 1) return null;
  let mid = Math.round((low + high) / 2);
  let guess = list[mid];
//  console.log(`
//        guess: ${guess} vs. item: ${item}
//        at mid: ${mid} `);
  

  if(guess === item) {
//    console.log("Found!", mid);
    return mid;
  } else if(guess > item) {
//    console.log("Too high!", list.slice(low, mid ));
    return recursiveBinarySearch(list, low, mid, item);
  } else {
//    console.log("Too low!", list.slice(mid, high+1));
    return recursiveBinarySearch(list, mid, high+1, item);
  }
  
  
}

const myList = [1, 3, 5, 7, 9];

console.log("=======================");
console.log('binarySearch');
console.log(binarySearch(myList, 3)); // 1
console.log();
console.log(binarySearch(myList, -1)); // null
console.log();
console.log();

console.log("=======================");
console.log('recursiveBinarySearch');
console.log("**1** ", recursiveBinarySearch(myList, 0, myList.length-1, 3)); // 1
console.log();
console.log("**null** ", recursiveBinarySearch(myList, 0, myList.length-1, -1)); // null
console.log();
console.log("**4** ", recursiveBinarySearch(myList, 0, myList.length-1, 9)); // 4
console.log();
console.log("**2** ", recursiveBinarySearch(myList, 0, myList.length-1, 5)); // 2
console.log();
console.log("**3** ", recursiveBinarySearch(myList, 0, myList.length-1, 7)); // 3
console.log();



