const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

const rectangle2 = {
  name: 'Rectangle 1',
  width: 30,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle2.area());

// It will be till window object
// function run () {
//   console.log(this);
// }