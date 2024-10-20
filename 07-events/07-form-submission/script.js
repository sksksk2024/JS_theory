// Showing what you just submited
const form = document.getElementById('item-form');

// Method 1
function onSubmit(e) {
  e.preventDefault(); // to make the submit form to stop being rendered
  
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0' || item === ' ') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Method 2
function onSubmit2 (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // const item = formData.get('item'); // name of the element
  // const priority = formData.get('priority');

  const entries = formData.entries();
  // console.log(entries);

  for (let entry of entries) {
    console.log(entry[1]);
  }

  // console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);