const list = [
  {
    key: "a",
    value: "1",
  },
  {
    key: "a",
    value: "2",
  },
  {
    key: "b",
    value: "1",
  },
  {
    key: "c",
    value: "1",
  },
  {
    key: "c",
    value: "1",
  },
  {
    key: "c",
    value: "2",
  },
];

function transformedList(list) {
  return Object.values(
    list.reduce((acc, current) => {
      if (acc[current.key]) {
        acc[current.key].count++;
        acc[current.key].values.push(current.value);
      } else {
        acc[current.key] = {
          key: current.key,
          count: 1,
          values: [current.value],
        };
      }

      return acc;
    }, {})
  );
}

console.log(transformedList(list));
