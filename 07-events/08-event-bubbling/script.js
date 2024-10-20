const button = document.querySelector('form button');
// it didnt work with :nth-child(2) cus it was a select too(that counts as a child as well), so it's the 3rd child, or by its type the 2nd!!! - div:nth-type(2)
const div = document.querySelector('div:nth-of-type(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked');
});