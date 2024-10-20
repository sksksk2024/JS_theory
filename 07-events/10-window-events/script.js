// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// }

window.addEventListener('load', () => console.log('Page Loaded'));

window.addEventListener(
  'DOMContentLoaded', 
  () => console.log('DOM Loaded'));

console.log('Run me');


window.addEventListener('resize', () => {
  document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('li').forEach((li) => {
    li.style.color = 'gray';
  });
  console.log('Help');
});

window.addEventListener('blur', () => {
  document.querySelectorAll('li').forEach((li) => {
    li.style.color = 'yellow';
  });
});