import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import faker from "faker";

export default class IndexController extends Controller {
  // Services

  @service store;

  // Tracked

  @tracked pageTitle = "";
  @tracked postTitle = "";

  // Methods

  randomTags() {
    return faker.random.arrayElements(this.store.peekAll("tag"));
  }

  // Actions

  @action addPage(title, event) {
    event.preventDefault();

    const tags = this.randomTags();

    const page = this.store.createRecord("page", { title, tags });

    page.save();

    this.pageTitle = "";
  }

  @action addPost(title, event) {
    event.preventDefault();

    const tags = this.randomTags();

    const post = this.store.createRecord("post", { title, tags });

    post.save();

    this.postTitle = "";
  }

  @action favourite(document) {
    let attrs = {
      documents: [document],
    };

    const fav = this.store.createRecord("favourite", attrs);

    fav.save();
  }

  @action unfavourite(favourite) {
    favourite.deleteRecord();

    favourite.save();
  }
}
