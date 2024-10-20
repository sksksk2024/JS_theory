const itemInput = document.getElementById('item-input');

const onKeyPress = e => {
  console.log('keypress');
}

const onKeyUp = e => {
  console.log('keyup');
}

const onKeyDown = e => {
  // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Alt: ' + e.shiftKey);
  console.log('Alt: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
}

itemInput.addEventListener('keydown', onKeyDown);