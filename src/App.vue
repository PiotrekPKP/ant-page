<template>
  <Navbar :links="links" />
  <Routes />
</template>

<script>
import Navbar from "@/components/Navbar";
import Routes from "@/components/Routes.js";

const links = [
  {text: "Home", link: "/"},
  {text: "Members", link: "/members"},
  {text: "Contact", link: "/contact"},
];

export default {
  name: 'App',
  components: {
    Routes,
    Navbar
  },
  data() {
    return {
      links: links
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}
</style>
