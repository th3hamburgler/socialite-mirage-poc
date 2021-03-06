import { attr, hasMany } from "@ember-data/model";
import Document from "./document";

export default class PageModel extends Document {
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

  @hasMany("tag") tags;
  @hasMany("favourite", { inverse: "documents" }) favourites;
  @hasMany("like", { inverse: "documents" }) likes;
}
