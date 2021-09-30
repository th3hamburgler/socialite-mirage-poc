import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  email: function () {
    return faker.internet.email();
  },
  firstName: function () {
    return faker.name.firstName();
  },
  lastName: function () {
    return faker.name.lastName();
  },
  role: function () {
    return "user";
  },
  createdAt: function () {
    return faker.date.recent();
  },
  updatedAt: function () {
    return faker.date.recent();
  },
  deltedAt: function () {
    return faker.date.recent();
  },
  lastLoginDate: function () {
    return faker.date.recent();
  },
});
