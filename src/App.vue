<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Home /> -->
    <router-link to="/">HomePage</router-link> &nbsp;
    <router-link to="/EmployeeList">EmployeeList</router-link>&nbsp;
    <router-link to="/DataBind">DataBinding</router-link> &nbsp;
    <router-link to="/Child">Child page</router-link> &nbsp;
    <router-link to="/Parent">Parent Page</router-link> &nbsp;
    <router-link to="/SingUp">SingUp Page</router-link>&nbsp;
    <router-link to="/login_frm">Login Page</router-link>&nbsp;
    <router-link to="/formValid">FormValid Page</router-link>&nbsp;
    <router-link to="/create">Create Page</router-link>&nbsp;
    <router-link to="/FilterText">Filter Test Page</router-link>&nbsp;
    <router-link to="/Mounted">Mounted Page</router-link>&nbsp;
    <router-link to="//Destroyed">Destroyed Page</router-link>&nbsp;
    <router-link to="/ActiveBoot">Active Boot Page</router-link>&nbsp;

    <router-view></router-view>

    <!-- <EmployeeList /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Home from "./components/Home.vue";

// import EmployeeList from "./components/EmployeeList.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Home,
    // EmployeeList,
  },
  data() {
    return { title: "props tutorial" };
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
