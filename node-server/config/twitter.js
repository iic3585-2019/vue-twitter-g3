const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMET_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
};
