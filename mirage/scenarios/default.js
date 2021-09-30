export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const user = server.create("user");

  server.createList("tag", 5);

  server.createList("post", 10, "withTags");
  server.createList("page", 10, "withTags");

  server.createList("favourite", 4, "withPage", { user });
  server.createList("favourite", 3, "withPost", { user });

  server.createList("like", 6, "withPage", { user });
  server.createList("like", 2, "withPost", { user });

  server.createList("health-target", 8, { user });
}
