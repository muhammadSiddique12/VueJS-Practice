<template>
  <div style="padding: 30px; background-color: burlywood">
    <h1>Before and after created</h1>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "create-1",
  data() {
    return {
      name: "brouce",
    };
  },
  beforeCreate() {
    console.warn("before");
  },
  created() {
    this.name = "sam";
    console.warn("created");
  },
};
</script>
