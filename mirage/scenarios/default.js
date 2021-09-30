export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList("tag", 5);

  server.createList("post", 10, "withTags");
  server.createList("page", 10, "withTags");

  server.createList("favourite", 5, "withPage");
}
