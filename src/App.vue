<template>
  <Navbar :links="links" />
  <RouterView />
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/views/NotFound";

const links = [
  {text: "Home", link: "/"},
  {text: "Members", link: "/members"},
  {text: "Contact", link: "/contact"},
  {text: "Login", link: "/login"}
];

export default {
  name: 'App',
  components: {
    Home,
    Navbar
  },
  data() {
    return {
      links: links
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
    width:5px
  }

  ::-webkit-scrollbar-track {
    background:#ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background:#ff443c;
  }
</style>
