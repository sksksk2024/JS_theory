class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this)); // when using 'this' in the function
  }

  getServerName() {
    console.log(this);
  }
}

const app = new App();