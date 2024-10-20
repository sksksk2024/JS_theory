// fetch('http://httpstat.us/200')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('SUCCESS');
//   });

// Test with response.ok
// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request Failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('SUCCESS');
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Check for specific code
fetch('http://httpstat.us/200')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response === 500) {
      throw new Error('Server Error');
    } else if (response.status !== 200){
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log('SUCCESS');
  })
  .catch(error => {
    console.log(error);
  });

// Catch runs on a network error
// fetch('http://hello123.net')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('SUCCESS');
//   })
//   .catch(error => {
//     console.log(error);
//   });