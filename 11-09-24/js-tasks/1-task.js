const arr = [true, NaN, "Hello", 3, false, "JavaScript", 8, NaN];


//---------1 example
function filterByType(arr) {
  const obj = {
    number: [],
    boolean: [],
    string: [],
  };

  arr.forEach((el) => {
    if (obj.hasOwnProperty(typeof el)) {
      obj[typeof el].push(el);
    }
  });

  const filteredNums = obj.number.filter((el) => !isNaN(el));
  obj.number = filteredNums;
  return obj;
}

console.log(filterByType2(arr));
//---------2 example
function filterByType2(arr) {
  const obj = {
    number: [],
    boolean: [],
    string: [],
  };
  arr.forEach((item) => {
    if (typeof item === "number" && !isNaN(item)) {
      obj.number.push(item);
    } else if (typeof item === "boolean") {
      obj.boolean.push(item);
    } else if (typeof item === "string") {
      obj.string.push(item);
    }
  });

  return obj
}
