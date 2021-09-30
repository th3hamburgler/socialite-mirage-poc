import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  favourites: hasMany("favourite"),
  likes: hasMany("like"),
  healthTargets: hasMany("health-target"),
});
