const express = new require("express");
const dynamoose = require("dynamoose");
const app = express();
require("dotenv").config();

/*
 *   Database configuration
 */

dynamoose.aws.sdk.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

app.listen(5000, () => {
  console.log("server started on port http://localhost:5000");
});
