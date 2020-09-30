<template>
  <Navbar :links="links" />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/views/NotFound";

const links = [
  {text: "Home", link: "/", active: true},
  {text: "Members", link: "/members", active: true},
  {text: "Contact", link: "/contact", active: false}
];

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  },
  data() {
    return {
      links
    }
  }
}
</script>
