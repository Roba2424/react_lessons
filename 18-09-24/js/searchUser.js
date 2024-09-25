const users = [
  { firstName: "Davit", lastName: "Sargsyan", age: 20 },
  { firstName: "Ani", lastName: "Hovsepyan", age: 40 },
  { firstName: "Anna", lastName: "Tashchyan", age: 50 },
  { firstName: "Aram", lastName: "Nazaryan", age: 70 },
  { firstName: "Hhovo", lastName: "Manukyan", age: 30 },
  { firstName: "Rafo", lastName: "Safaryan", age: 18 },
];

function searchUser(input) {
    return users.filter(user => user.firstName.toLowerCase().startsWith(input.toLowerCase()));

}
