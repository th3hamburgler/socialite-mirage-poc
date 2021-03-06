import Model, { attr, hasMany } from "@ember-data/model";

export default class DocumentModel extends Model {
  // Attributes

  @attr("string") title;
  @attr("string") slug;
  @attr("string") summary;
  @attr("string") thumbnail;
  @attr({
    defaultValue() {
      return [];
    },
  })
  banner;
  @attr({
    defaultValue() {
      return [];
    },
  })
  blocks;
  @attr({
    defaultValue() {
      return {};
    },
  })
  metadata;
  @attr("date") createdAt;
  @attr("date") updatedAt;
  @attr("date") publishedAt;
  @attr("date") deletedAt;

  // Relationships
  @hasMany("favourite", { inverse: "documents" }) favourites;
}
