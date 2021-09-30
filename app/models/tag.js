import Model, { attr, hasMany } from "@ember-data/model";

export default class TagModel extends Model {
  // Attributes

  @attr("string") name;
  @attr("string") slug;
  @attr("string") kind;
  @attr({
    defaultValue() {
      return { icon: "", description: "" };
    },
  })
  metadata;
  @attr("date") updatedAt;
  @attr("date") createdAt;
  @attr("date") deletedAt;

  // Relationships

  @hasMany("post") posts;
  @hasMany("page") pages;
}
