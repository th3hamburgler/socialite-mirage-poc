import { Factory, trait } from "ember-cli-mirage";
import faker from "faker";
import { dasherize } from "@ember/string";

export default Factory.extend({
  title: function () {
    return `Page ${faker.lorem.words()}`;
  },
  slug: function () {
    return dasherize(this.title);
  },
  summary: function () {
    return faker.lorem.words();
  },
  thumbnail: function (i) {
    // add url param to get different image
    return faker.image.imageUrl() + "?id=" + i;
  },
  banner: function () {
    return [];
  },
  blocks: function () {
    return [];
  },
  meta: function () {
    return {};
  },
  createdAt: function () {
    return faker.date.recent();
  },
  updatedAt: function () {
    return this.createdAt;
  },
  publishedAt: function () {
    // 50% chance it's published
    return faker.datatype.boolean() ? faker.date.recent() : null;
  },
  deletedAt: function () {
    return null;
  },

  // Traits

  withTags: trait({
    afterCreate(page, server) {
      const tags = server.schema.tags.all().models;

      page.tags = faker.random.arrayElements(tags);

      page.save();
    },
  }),
});
