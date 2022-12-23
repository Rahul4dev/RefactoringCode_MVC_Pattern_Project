const mongodb = require("mongodb");

const db = require("../data/database");
const ObjectId = mongodb.ObjectId;

class Post {
  constructor(title, content, id) {
    this.title = title;
    this.content = content;

    if (id) {
      this.id = new ObjectId(id); // transform id from string to objectId
    } // may be undefined if create new post
  }
  // need to fetch all the data from the posts table in the database.
  // static methods are used to construct a blueprint and also used to grouping the functionalities together.
  // here we used that property of static method and fetch all the data from database as we do not have this method in this post model.
  static async fetchAll() {
    const posts = await db.getDb().collection("posts").find().toArray();
    return posts;
  }

  // similarly for fetching single post
  async fetch() {
    if (!this.id) {
      return;
    }

    const postDocument = await db
      .getDb()
      .collection("posts")
      .findOne({ _id: this.id });
    this.title = postDocument.title;
    this.content = postDocument.content;
  }

  async save() {
    // to save the new post and updated one
    let result;

    if (this.id) {
      result = await db
        .getDb()
        .collection("posts")
        .updateOne(
          { _id: this.id },
          { $set: { title: this.title, content: this.content } }
        );
    } else {
      result = await db.getDb().collection("posts").insertOne({
        title: this.title,
        content: this.content,
      });
    }

    return result;
  }

  async delete() {
    if (!this.id) {
      return;
    }
    const result = await db
      .getDb()
      .collection("posts")
      .deleteOne({ _id: this.id });
    return result;
  }
}

module.exports = Post;
