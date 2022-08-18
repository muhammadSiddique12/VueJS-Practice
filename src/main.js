import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import EmployeeList from "./components/EmployeeList.vue";
import Home from "./components/Home.vue";
import DataBind from "./components/DataBind.vue";
import Child from "./components/child.vue";
import Parent from "./components/Parent.vue";
import SignUp from "./components/SignUp.vue";
import login_frm from "./components/loginfrm.vue";
import formValid from "./components/formValid.vue";
import create from "./components/create.vue";
import FilterText from "./components/filterText.vue";
import Mounted from "./components/mounted.vue";
import Destroyed from "./components/destroyed.vue";
import ActiveBoot from "./components/ActiveBoot.vue";
import PageNotFound from "./components/PageNotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/EmployeeList", component: EmployeeList },
  { path: "/DataBind", component: DataBind },
  { path: "/Child", component: Child },
  { path: "/Parent", component: Parent },
  { path: "/SingUp", component: SignUp },
  { path: "/login_frm", component: login_frm },
  { path: "/formValid", component: formValid },
  { path: "/create", component: create },
  { path: "/FilterText", component: FilterText },
  { path: "/Mounted", component: Mounted },
  { path: "/Destroyed", component: Destroyed },
  { path: "/ActiveBoot", component: ActiveBoot },
  { path: "*", component: PageNotFound },
];
const router = new VueRouter({
  routes,
});

Vue.directive("size", {
  bind(el, binding) {
    if (binding.value == "small") {
      el.style.fontSize = "20px";
    } else if (binding.value == "big") {
      el.style.fontSize = "100px";
    } else if (binding.value == "") {
      el.style.fontSize = "60px";
    }
  },
});

Vue.filter("Ucase", function (val) {
  return val.toUpperCase();
});
Vue.filter("currencyConverter", function (val) {
  return val * 215;
});
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
