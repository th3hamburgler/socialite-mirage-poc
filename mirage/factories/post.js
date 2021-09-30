import { Factory, trait } from "ember-cli-mirage";
import faker from "faker";
import { dasherize } from "@ember/string";

export default Factory.extend({
  title: function () {
    return `Post ${faker.lorem.words()}`;
  },
  slug: function () {
    return dasherize(this.title);
  },
  summary: function () {
    return faker.lorem.words();
  },
  thumbnail: function (i) {
    return faker.datatype.boolean()
      ? faker.image.imageUrl() + "?id=" + i
      : null;
  },
  banner: function () {
    return [];
  },
  blocks: function () {
    return [];
  },
  createdAt: function () {
    return faker.date.recent();
  },
  updatedAt: function () {
    return this.createdAt;
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
