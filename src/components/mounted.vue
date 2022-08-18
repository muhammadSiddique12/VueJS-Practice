<template>
  <div style="padding: 30px; background-color: cadetblue">
    <h1>Before and mounted</h1>
    <h1 id="demo">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "mount-1",
  data() {
    return {
      name: "brouce",
    };
  },
  beforeMount() {
    console.warn("beforemount", document.getElementById("demo"));
  },
  mounted() {
    this.name = "sam";
    console.warn("mounted", document.getElementById("demo"));
  },
};
</script>
