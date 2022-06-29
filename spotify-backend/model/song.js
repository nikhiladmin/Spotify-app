const dynamoose = require("dynamoose");

const songSchema = new dynamoose.Schema({
  id: String,
  name: String,
  dateOfRelease: Date,
  cover: String,
});

const Song = dynamoose.model("Song", songSchema);

module.exports = Song;
