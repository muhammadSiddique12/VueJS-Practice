<template>
  <div style="background-color: blue; padding: 20px">
    <input
      type="text"
      name="username"
      v-model="Form.name"
      placeholder="enter your name"
    /><br /><br />
    <input
      type="password"
      name="userpassword"
      v-model="Form.password"
      placeholder="password"
    /><br /><br />
    <button v-on:click="logIn">logIn</button>
  </div>
</template>
<script>
export default {
  name: "login_frm",
  data() {
    return {
      Form: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    logIn() {
      console.log("logIn");
    },
  },
};
</script>
