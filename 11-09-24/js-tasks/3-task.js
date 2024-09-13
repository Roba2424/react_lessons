//foreach
function customForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

//flat
function customFlat(depth = 1) {
  let result = [];

  const flatten = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        flatten(arr[i], depth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  };

  flatten(this, depth);
  return result;
}

//bind
function customBind(context, ...args) {
  const func = this;
  return function (...newArgs) {
    return func.apply(context, [...args, ...newArgs]);
  };
}

//map
function customMap(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

//reduce
function customReduce(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}
