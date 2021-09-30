import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  tags: hasMany("tag"),
  favourites: hasMany("favourite", { inverse: "documents" }),
});
