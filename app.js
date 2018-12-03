const http = new EasyHTTP();

// Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

//User Data
const data = {
  name: "adam smith",
  username: "asmith",
  email: "adamsmith@gmail.com"
};

// Create Post
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
