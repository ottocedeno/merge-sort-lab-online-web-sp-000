function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function findAndRemove(firstArray, secondArray) {
  return firstArray[0] < secondArray[0]
    ? firstArray.shift()
    : secondArray.shift();
}

function merge(firstSubarray, secondSubarray) {
  let sorted = [];
  let currentMin;

  while (firstSubarray.length != 0 && secondSubarray.length != 0) {
    // if (firstSubarray[0] < secondSubarray[0]) {
    //   currentMin = firstSubarray.shift();
    // } else {
    //   currentMin = secondSubarray.shift();
    // }

    currentMin = findAndRemove(firstSubarray, secondSubarray);
    sorted.push(currentMin);
  }
  return sorted.concat(firstSubarray).concat(secondSubarray);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);

  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

// console.log(mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]));
