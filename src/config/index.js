const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('book-store-web-22.herokuapp.com', 'https://book-store-web-22.herokuapp.com/');

export default environmentUrls.get(window.location.hostname);