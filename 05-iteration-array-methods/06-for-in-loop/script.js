const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'orange',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
  console.log(key, colorArr[key]);
}