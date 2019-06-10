import Bus from "./bus";
import Socket from "./socket";

class StreamService {
  constructor() {
    this.init();
  }

  init() {
    this.onTweet = this.onTweet.bind(this);
    this.query = undefined;
  }

  start(q) {
    this.query = q;
    Socket.on("tweet", this.onTweet);

    Socket.emit("start-tweets", {
      track: this.query
    });

    Bus.$emit("start");
  }

  reset(query) {
    this.query = query;
    Bus.$emit("reset", { track: this.query });
  }

  end() {
    Socket.off("tweet", this.onTweet);
    Socket.disconnect();

    setTimeout(() => {
      Socket.connect();
    }, 1000);

    Bus.$emit("end");
  }

  onTweet(tweet) {
    Bus.$emit("tweet", tweet);
  }
}

export default new StreamService();
