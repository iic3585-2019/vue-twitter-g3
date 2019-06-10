<template>
  <div id="app">
    <Nav />
    <Main />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";

import { Socket, Bus } from "./services";

export default {
  name: "app",
  components: {
    Nav,
    Main
  },
  created() {
    Socket.on("connections", status => {
      Bus.$emit("connections", status);
    });

    Socket.on("stream_active", status => {
      Bus.$emit("stream_status", status);
    });

    Socket.on("stream_inactive", status => {
      Bus.$emit("stream_status", status);
    });

    Socket.on("connect", err => {
      if (err) {
        console.log(err);
      } else {
        console.log("connect");
        this.hideError();
      }
    });
  },
  methods: {
    hideError() {
      console.log("hideError");
    },
    showError() {
      console.log("showError");
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
