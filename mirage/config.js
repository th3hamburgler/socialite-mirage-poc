export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = "http://localhost:4000";
  // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.get("/users");
  this.post("/users");
  this.get("/users/:id");
  this.put("/users/:id");
  this.patch("/users/:id");
  this.del("/users/:id");

  this.get("/tags");
  this.post("/tags");
  this.get("/tags/:id");
  this.put("/tags/:id");
  this.patch("/tags/:id");
  this.del("/tags/:id");

  this.get("/documents/pages");
  this.post("/documents/pages");
  this.get("/documents/pages/:id");
  this.put("/documents/pages/:id");
  this.patch("/documents/pages/:id");
  this.del("/documents/pages/:id");

  this.get("/documents/posts");
  this.post("/documents/posts");
  this.get("/documents/posts/:id");
  this.put("/documents/posts/:id");
  this.patch("/documents/posts/:id");
  this.del("/documents/posts/:id");
}