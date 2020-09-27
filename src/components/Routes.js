import Home from "@/components/Home";
import Login from "@/components/Login";
import * as Vue from "@vue/runtime-core";
import NotFound from "@/components/NotFound";

const routes = {
  "/": Home,
  "/login": Login
}

export default {
  name: "Routes",
  data() {
    return {
      currentRoute: window.location.pathname
    }
  },
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render() {
    return Vue.h(this.CurrentComponent)
  }
}