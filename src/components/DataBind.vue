<template>
  <div class="head">
    <h1>DataBinding</h1>
    <h2 style="white-space: pre-line">{{ message }}</h2>
    <textarea type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: "DataBind",
  data() {
    return {
      message: "Hi",
    };
  },
};
</script>

<style scoped>
.head {
  background-color: aquamarine;
  height: 200px;
}
</style>
