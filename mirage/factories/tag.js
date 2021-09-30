import { Factory } from "ember-cli-mirage";
import faker from "faker";
import { dasherize } from "@ember/string";

export default Factory.extend({
  name: function () {
    return faker.music.genre();
  },
  slug: function () {
    return dasherize(this.name);
  },
  kind: function () {
    return faker.lorem.word();
  },
  updatedAt: function () {
    return faker.date.recent();
  },
  createdAt: function () {
    return faker.date.recent();
  },
  metadata: function () {
    return {
      icon: faker.random.arrayElement([
        "home",
        "work",
        "sport",
        "art",
        "media",
      ]),
      description: faker.lorem.sentence(),
    };
  },
});
