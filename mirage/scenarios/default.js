export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const tags = server.createList("tag", 5);
  console.log(tags);

  server.createList("post", 10, "withTags");
  server.createList("page", 10, "withTags");
}
