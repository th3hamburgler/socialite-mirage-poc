import { Model, belongsTo, hasMany } from "ember-cli-mirage";

export default Model.extend({
  // Relationships

  user: belongsTo("user"),
  documents: hasMany("document", { polymorphic: true }),
  // posts: hasMany("post"),
  // pages: hasMany("page"),
});
