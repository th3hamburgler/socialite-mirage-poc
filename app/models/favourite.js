import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class FavouriteModel extends Model {
  @attr("boolean") private;
  @attr("string") value;
  @attr() meta;
  @attr("date") createdAt;
  @attr("date") updatedAt;
  @attr("date") deletedAt;

  // Relationships

  @belongsTo("user") user;
  @hasMany("document", { polymorphic: true }) documents;
  // @hasMany("post") posts;
  // @hasMany("page") pages;
}
