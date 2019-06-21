function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var pivot = arr[0];
    var less = [], greater = [];
    
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) less.push(arr[i]);
      if (arr[i] > pivot) greater.push(arr[i]);
    }
    
    return quickSort(less).concat(pivot).concat(quickSort(greater));
  }
}

console.log("[10, 5, 2, 3]:", quickSort([10, 5, 2, 3]));
console.log("[-10, 5, 2, 100, 33, -50, 1]:", quickSort([-10, 5, 2, 100, 33, -50, 1]));