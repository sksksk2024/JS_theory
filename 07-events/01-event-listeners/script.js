const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');

  const items = itemList.querySelectorAll('li');
  
  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  // The most performant
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// My method to remove all the lis in the browser when clicking the clear button
// function removeAll () {
//   const lisRemove = document.querySelectorAll('li');
//   lisRemove.forEach((li) => li.remove())
// }

// His Solution

//onclick event is with a c (not a C - NOOO)!!!!


// JS Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// addEventListener()

// clearBtn.addEventListener('click', () => alert('Clear Items'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(),5000);