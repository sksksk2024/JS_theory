
(function() {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hwllo from IIFE')
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Han');

(function hello() {
  console.log('Hello');
  hello();
})();
