function basicQuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var pivot = arr[0];
    var less = [], greater = [];
    
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) less.push(arr[i]);
      if (arr[i] > pivot) greater.push(arr[i]);
    }
    
    return basicQuickSort(less).concat(pivot).concat(basicQuickSort(greater));
  }
}


console.log('=================');
console.log('basicQuickSort');
console.log("[10, 5, 2, 3]:", basicQuickSort([10, 5, 2, 3]));
console.log("[-10, 5, 2, 100, 33, -50, 1]:", basicQuickSort([-10, 5, 2, 100, 33, -50, 1]));
console.log();


function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var pivot = arr[randomIndex];
//    console.log(arr.length, randomIndex, pivot);
    var less = [], greater = [];
    
    for(var i = 0; i < arr.length; i++) {
      if (i !== randomIndex) {
        if (arr[i] <= pivot) less.push(arr[i]);
        if (arr[i] > pivot) greater.push(arr[i]);
      }
      
    }
    
    return quickSort(less).concat(pivot).concat(quickSort(greater));
  }
}

console.log('=================');
console.log('quickSort');
console.log("[10, 5, 2, 3]:", quickSort([10, 5, 2, 3]));
console.log("[-10, 5, 2, 100, 33, -50, 1]:", quickSort([-10, 5, 2, 100, 33, -50, 1]));
console.log("[-10, 5, 2, 100, 33, -50, 1, 0, 99, 23, 231, -1334]:", quickSort([-10, 5, 2, 100, 33, -50, 1, 0, 99, 23, 231, -1334]));









