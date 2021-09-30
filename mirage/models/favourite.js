import { Model, belongsTo, hasMany } from "ember-cli-mirage";

export default Model.extend({
  // Relationships

  user: belongsTo("user"),
  posts: hasMany("post"),
  pages: hasMany("page"),
});
