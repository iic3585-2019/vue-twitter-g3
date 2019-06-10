<template>
  <nav>
    <div>
      <input
        v-on:change="onChange"
        type="radio"
        name="contact"
        value="sunset"
        checked
      />
      <label for="contactChoice1">sunsets</label>

      <input v-on:change="onChange" type="radio" name="contact" value="sushi" />
      <label for="contactChoice2">sushi</label>

      <input v-on:change="onChange" type="radio" name="contact" value="ramen" />
      <label for="contactChoice3">ramen</label>

      <input
        v-on:change="onChange"
        type="radio"
        name="contact"
        value="fasting"
      />
      <label for="contactChoice3">fasting</label>
    </div>
    <button type="button" @click="toggleStream">
      {{ `${streamActive ? "Stop" : "Start"} 🕊` }}
    </button>
  </nav>
</template>

<script>
import { Bus, StreamService } from "../services";

export default {
  name: "Nav",
  components: {},
  data: () => ({
    streamActive: false,
    query: "sunsets"
  }),
  created() {
    Bus.$on("stream_status", this.onStreamStatus);
    Bus.$on("connections", this.onConnections);
  },
  beforeDestroy() {
    Bus.$off("stream_status", this.onStreamStatus);
    Bus.$off("connections", this.onConnections);
  },
  methods: {
    onChange(v) {
      this.query = v.target.value;
      if (this.streamActive) {
        Bus.$emit("reset-context");
        this.toggleStream();
      }
    },
    toggleStream() {
      if (this.streamActive) {
        StreamService.end();
      } else {
        StreamService.start(this.query);
      }
      this.streamActive = !this.streamActive;
    },
    onStreamStatus(status) {
      this.connectedClients = status.connections;
      this.streamOccupied = status.streamActive;
    },
    onConnections(status) {
      this.connectedClients = status.connections;
      this.streamOccupied = status.streamActive;
    }
  }
};
</script>

<style>
label {
  margin: 0 10px;
}
nav {
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  text-align: center;
}
</style>
