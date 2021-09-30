import { Factory, trait } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  kind() {
    return "like";
  },

  private() {
    return false;
  },

  value() {
    return faker.lorem.word();
  },

  metadata() {
    return {};
  },

  createdAt() {
    return faker.date.past();
  },

  updatedAt() {
    return faker.date.past();
  },

  deletedAt() {
    return null;
  },

  // Traits

  withPage: trait({
    afterCreate(page, server) {
      const pages = server.schema.pages.all().models;

      page.documents = [faker.random.arrayElement(pages)];

      page.save();
    },
  }),

  withPost: trait({
    afterCreate(post, server) {
      const posts = server.schema.posts.all().models;

      post.documents = [faker.random.arrayElement(posts)];

      post.save();
    },
  }),
});
