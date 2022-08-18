<template>
  <div style="background-color: darkcyan; padding: 30px">
    <h1>SignUp Form</h1>
    <input type="text" placeholder="enter your name" v-model="signup.name" />
    <br /><br />
    <input
      type="password"
      placeholder="enter your passward"
      v-model="signup.passward"
    />
    <br /><br />
    <h2>Choose your Hobbies</h2>
    <input
      type="checkbox"
      id="cricket"
      value="cricket"
      v-model="signup.hobbies"
    />
    <label for="cricket"> Cricket</label>
    <input
      type="checkbox"
      id="football"
      value="football"
      v-model="signup.hobbies"
    />
    <label for="football"> Football</label>
    <br /><br />
    <h2>Select Gender</h2>
    <input type="radio" id="male" value="male" v-model="signup.gender" />
    <label for="male">Male</label>
    <input type="radio" id="female" value="female" v-model="signup.gender" />
    <label for="female">Female</label>
    <br />
    <br />
    <button v-on:click="signupUser">Sign Up</button>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      signup: {
        name: null,
        password: null,
        hobbies: [],
        gender: null,
      },
    };
  },
  methods: {
    signupUser() {
      console.warn(this.signup);
    },
  },
};
</script>
