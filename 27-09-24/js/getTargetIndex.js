const arr = [1, 3, 5, 12, 6, 1, 2];
const arr2 = [9, 3, 1, 5, 7, 3];

function getTargetIndex(arr, target) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push(i, j);
        return res;
      }
    }
  }
  return null;
}

function getTargetIndex2(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let val = target - arr[i];

    if (map.has(val)) {
      return [map.get(val), i]; 
    }

    map.set(arr[i], i);
  }
  return null; 
}

console.log(getTargetIndex2(arr, 9));
