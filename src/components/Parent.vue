<template>
  <div>
    <button v-on:click="updateTitle">Update Parrent Title</button>
  </div>
</template>

<script>
export default {
  name: "Parent-1",

  methods: {
    updateTitle() {
      this.$emit("changeTitle", "Like Vue js");
    },
  },
};
</script>
