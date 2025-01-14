function Rectangle (name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return (this.height + this.width) * 2;
}

Rectangle.prototype.isSquare = function () {
  return this.height === this.width;
}

Rectangle.prototype.changeName = function (newName) {
  return this.name = newName;
}

const rect = new Rectangle ('Rect', 10, 20);
const rect2 = new Rectangle ('Rect 2', 30, 40);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());

rect.changeName('rrect');
console.log(rect.name);

console.log(rect2.area());