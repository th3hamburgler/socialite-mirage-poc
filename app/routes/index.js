import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service store;

  model() {
    return {
      posts: this.store.findAll("post", { include: "favourites,tags" }),
      pages: this.store.findAll("page", { include: "favourites,tags" }),
      favourites: this.store.findAll("favourite", { include: "pages.tags" }),
    };
  }
}
