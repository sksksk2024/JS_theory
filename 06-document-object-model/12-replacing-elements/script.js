function replaceFirstItem() {
  const FirstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  FirstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
}

function replacedAllItems() {
  const lis = document.querySelectorAll('li');

  lis.forEach((item, index) => item.innerHTML = index === 1 ? 'Second Item' : 'Item');

  // lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>');
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);

}

replaceFirstItem();
replaceSecondItem();
replacedAllItems();
replaceChildHeading();