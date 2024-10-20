// Fetching a JSON file (they are GET by basic - if you not type it)
fetch('./movies.json')
  // we'll see the response details
  .then(response => response.json())
  // we'll see the actual movies
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data)); 
  
// Fetching from an API
fetch('https:///api.github.com/users/sksksk2024')
  .then((response) => response.json())
  .then((data) => document.querySelector('h1').textContent = data.login);