const insertAfter = (newEl, existingEl) => 
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:nth-child(1)');

// Our custom function
insertAfter(li, firstItem);