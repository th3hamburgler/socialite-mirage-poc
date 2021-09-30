import Model, { attr, hasMany } from "@ember-data/model";

export default class UserModel extends Model {
  // Attributes

  @attr("string") email;
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("string") role;
  @attr("date") createdAt;
  @attr("date") updatedAt;
  @attr("date") deletedAt;
  @attr("date") lastLoginDate;

  // Relationships

  @hasMany("favourite") favourites;
  @hasMany("health-target") healthTargets;
}
