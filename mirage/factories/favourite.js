import { Factory, trait } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  kind() {
    return "favourite";
  },

  private() {
    return false;
  },

  value() {
    return faker.lorem.word();
  },

  meta() {
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

      page.pages = [faker.random.arrayElement(pages)];

      page.save();
    },
  }),
});
