function findSmallest(arr) {
  smallest = arr[0];
  smallestIndex = 0;
  
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  
  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const length = arr.length;
  
  for(let i = 0; i < length; i++) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  
  return newArr;
}

console.log("[5,3,12,5,7,9,1]:", selectionSort([5,3,12,5,7,9,1]));
console.log("[5,3,-12,5,7,9,101,-33]:", selectionSort([5,3,-12,5,7,9,101,-33]));