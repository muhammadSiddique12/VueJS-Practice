<template>
  <div style="background-color: orange; padding: 30px">
    <div v-if="display"><h1>before and destroyed</h1></div>

    <button v-on:click="toggle">toggle</button>
  </div>
</template>
<script>
export default {
  name: "destroyed-1",
  data() {
    return { display: true };
  },
  methods: {
    toggle() {
      this.display = !this.display;
    },
  },
  beforedestroyed() {
    console.warn("beforedestroyed");
  },

  destroyed() {
    console.warn("destroyed");
  },
};
</script>
