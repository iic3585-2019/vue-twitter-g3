<template>
  <div class="main">
    <Tweet v-for="tweet in tweets" v-bind:key="tweet.id" v-bind:tweet="tweet" />
  </div>
</template>

<script>
import { Bus } from "../services";
import Tweet from "./Tweet";
export default {
  name: "Main",
  components: {
    Tweet
  },
  data: () => ({
    streamActive: false,
    tweets: []
  }),
  created() {
    Bus.$on("tweet", this.onTweet);
    Bus.$on("reset-context", this.changeContext);
  },
  beforeDestroy() {
    Bus.$off("tweet", this.onTweet);
  },
  methods: {
    changeContext() {
      this.tweets = [];
    },
    onTweet(tweet) {
      console.log(tweet);
      this.tweets = [{ ...tweet }, ...this.tweets];
    }
  }
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
