const array = [2,6];

//--------------1
function getMissingNums(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const missingNums = [];
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) missingNums.push(i);
  }
  return missingNums;
}



//--------------2
function getMissingNums2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const arr2 = [];
  const nums = new Set(arr);

  for (let i = min; i <= max; i++) {
    arr2.push(i);
  }

  const missingNums = arr2.filter((num) => !nums.has(num));
  return missingNums;
}

