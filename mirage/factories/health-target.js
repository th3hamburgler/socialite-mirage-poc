import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  kind() {
    return "health-target";
  },

  private() {
    return true;
  },

  value() {
    return faker.datatype.number();
  },

  metadata() {
    return {
      metric: faker.random.arrayElement([
        "sleep",
        "steps",
        "calories-in",
        "calories-out",
        "weight",
        "bmi",
      ]),
    };
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
});
