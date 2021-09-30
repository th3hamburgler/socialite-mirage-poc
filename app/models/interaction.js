import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class InteractionModel extends Model {
  // Attributes

  @attr("boolean") private;
  @attr("string") value;
  @attr() metadata;
  @attr("date") createdAt;
  @attr("date") updatedAt;
  @attr("date") deletedAt;

  // Relationships

  @belongsTo("user") user;
  @hasMany("document", { polymorphic: true }) documents;
}
