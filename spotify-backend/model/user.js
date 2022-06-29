const dynamoose = require("dynamoose");

const userSchema = new dynamoose.Schema({
  id: String,
  name: String,
  email: String,
});

const User = dynamoose.model("User", userSchema);

module.exports = User;
