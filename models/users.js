const db = require("../data/database");
const bcrypt = require("bcryptjs");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async findUser() {
    const existingUser = await db
      .getDb()
      .collection("users")
      .findOne({ email: this.email });

    return existingUser;
  }

  async compare() {
    const existingUser = await db
      .getDb()
      .collection("users")
      .findOne({ email: this.email });
    const passwordsAreEqual = await bcrypt.compare(
      this.password,
      existingUser.password
    );
    return passwordsAreEqual;
  }

  async existsAlready() {
    const existingUser = await this.findUser();
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }

  async save() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    const newUser = {
      email: this.email,
      password: hashedPassword,
    };

    const result = await db.getDb().collection("users").insertOne(newUser);
    return result;
  }
}

module.exports = User;
