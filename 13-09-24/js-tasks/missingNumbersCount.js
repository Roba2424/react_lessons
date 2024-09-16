//----------1
function getMissingNumsCount(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const res = [];
  for (let i = min; i <= max; i++) {
    res.push(i);
  }

  return res.length - arr.length;
}

console.log(getMissingNumsCount([5, 2]));

//----------2
function getMissingNumsCount2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const totalRange = max - min + 1;

  return totalRange - arr.length;
}

console.log(getMissingNumsCount2([3,9]));
