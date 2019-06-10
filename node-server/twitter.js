const twit = require("twit");

const config = require("./config/twitter");

const twitter = new twit(config);

module.exports = obj =>
  new Promise((resolve, reject) => {
    if (obj !== null && typeof obj === "object") {
      let settings = {};

      if (obj.follow) {
        settings.follow = obj.follow;
      }

      if (obj.track) {
        settings.track = obj.track;
      }

      if (obj.locations) {
        settings.locations = obj.locations;
      }

      let stream = twitter.stream("statuses/filter", settings);

      return resolve(stream);
    }

    return reject("Parameter was not an object!");
  });
