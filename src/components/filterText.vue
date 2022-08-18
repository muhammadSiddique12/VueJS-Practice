<template>
  <div style="background-color: red; padding: 30px">
    <h1 style="color: white">filters in vue</h1>
    <h3 style="color: white">{{ name | Ucase }}</h3>
    <h3 style="color: white">{{ amount | \currencyConverter }}</h3>
  </div>
</template>
<script>
export default {
  name: "filerText-1",

  data() {
    return {
      name: "sam",
      amount: 100,
    };
  },
};
</script>
