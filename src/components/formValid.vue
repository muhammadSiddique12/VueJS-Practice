<template>
  <div style="padding:30px; background-color:lightgreen">
    <p v-if="error.length">
      <b>please correct the follwing error</b>
      <ul>
        <li v-for="e in error"  v-bind:key="e.id">
        {{e}}
        </li>
      </ul>
    </p>
    <form @submit="login">
      <input type="text" placeholder="enter your name" v-model="name"/><br /><br />
      <input type="password" placeholder="enter password"  v-model="password"/> <br />
      <br />
      <button type="submit">log in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "formValid",
  data() {
    return {
      error: [],
      name: null,
      password: null,
    };
  },
  methods: {
    login(e) {
      this.error = [];
      if (this.name && this.password) {
        console.warn("no error");
      }
      if (!this.name) {
        this.error.push("user name is required name");
      }
      if (!this.password) {
        this.error.push("password is required");
      }
      console.warn("hello", this.error);
      e.preventDefault();
    },
  },
};
</script>
