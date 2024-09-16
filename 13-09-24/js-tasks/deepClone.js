const obj1 = {
  a: {
    b: {
      c: {
        d: [
          {
            name: "Ani",
            lastName: "Smith",
            age: 21,
          },
          {
            name: "John",
            lastName: "Smith",
            age: 21,
          },
        ],
      },
    },
  },
  name: "Deep Copy",
  und: undefined,
  un: null,
};
//---------1
// const obj2  = structuredClone(obj1);
// obj2.a.b.c = {1:100}
// console.log(obj1.a.b.c)
// console.log(obj2.a.b.c)

//---------2
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.a.b.c = { 1: 100 };
// console.log(obj1.a.b.c);
// console.log(obj2.a.b.c);

//---------3
function deepClone(obj) {
  const res = {};
  const condition =
    typeof obj !== "object" ||
    typeof obj === undefined ||
    obj === null ||
    Array.isArray(obj) ||
    typeof obj == "function";

  if (condition) {
    return obj;
  }

  const keys = Object.keys(obj);
  for (const key in keys) {
    res[keys[key]] = deepClone(obj[keys[key]]);
  }

  return res;
}

const obj2 = deepClone(obj1)

obj2.a.b.c = { 1: 100 };
console.log('obj1')
console.log(obj1.a.b.c);
console.log('obj2')
console.log(obj2.a.b.c);
