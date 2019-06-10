<template>
  <blockquote class="twitter-tweet">
    <img
      v-if="tweet.entities.media"
      class="tw-media-img"
      v-bind:src="tweet.entities.media[0].media_url"
    />
    <div class="tw-content">
      <div class="h">
        <div class="v" style="margin-right: 5px;">
          <a href="#">
            <img
              class="twitter-profile-img"
              v-bind:src="tweet.user.profile_image_url"
              title="White flower"
              alt="Flower"
            />
          </a>
        </div>
        <div class="v">
          <a href="#" class="tw-text tw-title">{{ tweet.user.name }}</a>
          <a href="#" class="tw-text tw-subtitle"
            >@{{ tweet.user.screen_name }}</a
          >
        </div>
      </div>
      <div class="v">
        <p>{{ tweet.text }}</p>
        <p class="tw-subtitle">{{ tweet.created_at }}</p>
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: "Tweet",
  props: ["tweet"]
};
</script>

<style>
.tw-media-img {
  width: 100%;
}
.tw-title {
  color: black !important;
  font-weight: bold;
  font-size: large;
}
.tw-subtitle {
  color: gray !important;
  font-weight: 500;
}
.tw-text {
  margin: 2px 0;
}
div.h {
  display: flex;
  flex-direction: row;
  align-items: center;
}
div.v {
  display: flex;
  flex-direction: column;
}
.tw-content {
  padding: 1.25rem 1.25rem 0.725rem 1.25rem;
}
blockquote img.twitter-profile-img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
blockquote.twitter-tweet {
  overflow: hidden;
  color: #1c2022;
  background-color: #fff;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  width: 500px;
  max-width: 100%;
  min-width: 220px;
}
blockquote.twitter-tweet:before {
  content: none;
}
blockquote.twitter-tweet p {
  white-space: pre-wrap;
  font: 16px/1.4 Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
}
blockquote.twitter-tweet a {
  color: #2b7bb9;
  text-decoration: none;
}
blockquote.twitter-tweet a:visited {
  color: #2b7bb9;
}
</style>
