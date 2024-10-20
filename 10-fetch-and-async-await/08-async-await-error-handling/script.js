//prefered method (with try and catch inside the function)
const getUsers = async () => {
  try {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users'); //promise
    const res = await fetch('http://httpstat.us/500');

    if (!res.ok) {
      throw new Error('Request Failed');
    }

    const data = await res.text(); //promise

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await fetch('http://httpstate.us/500');

    if (!res.ok) {
      throw new Error('Request Failed');
    }

    const data = await res.text();

    console.log(data);
};

// getUsers();

getPosts().catch(error => console.log(error));