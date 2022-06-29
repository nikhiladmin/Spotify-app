const dynamoose = require("dynamoose");

const artistSchema = new dynamoose.Schema({
  id: String,
  name: String,
  dob: Date,
  bio: String,
});

const Artist = dynamoose.model("Artist", artistSchema);

module.exports = Artist;
