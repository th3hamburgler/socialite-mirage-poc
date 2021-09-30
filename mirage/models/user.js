import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  favourites: hasMany("favourite"),
  healthTargets: hasMany("health-target"),
});
