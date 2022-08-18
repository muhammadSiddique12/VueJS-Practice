<template>
  <div style="background-color: bisque">
    <h1>Props components in Vue js</h1>
    <h3 v-for="user in users" :key="user.name">
      {{ user.name }}--- {{ user.email }}
    </h3>
    <h1 v-size="'samll'">Custom directives in Vue js</h1>
    <h1 v-size="''">Custom directives in Vue js</h1>
    <h1 v-size="'big'">Custom directives in Vue js</h1>
  </div>
</template>
<script>
export default {
  name: "child-1",
  props: ["users"],
};
</script>
