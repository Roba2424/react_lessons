const arr = [1, 1, 5, 6, 7, 7, 8, 9, 3, 4, 4];

//----------1
function removeDuplicate(arr) {
  const set = new Set(arr);
  const newArr = Array.from(set);
  return newArr;
}

console.log(removeDuplicate(arr));

//----------2
function removeDuplicate2(arr) {
  const newArr = [];
  for (const el of arr) {
    if (!newArr.includes(el)) newArr.push(el);
  }
  return newArr;
}

console.log(removeDuplicate2(arr));
