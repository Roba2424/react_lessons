function A(x, y) {
  this.x = x;
  this.y = y;
}

A.prototype.calc = function () {
  return this.x + this.y;
};

function B(x, y, z) {
  A.call(this, x, y);
  this.z = z;
  this.calcValue = null;
}

B.prototype = Object(A.prototype);
B.prototype.constructor = B;

B.myMethod = function () {
  console.log("static method");
};

B.prototype.changeCalcValue = function () {
  this.calcValue = this.calc();
};

//-----------A
const a = new A(2, 2);
console.log(a);
console.log(a.calc());

//-----------B
const b = new B(4, 5, 30);
console.log(b)
console.log(b.changeCalcValue());
console.log(b.calcValue);
