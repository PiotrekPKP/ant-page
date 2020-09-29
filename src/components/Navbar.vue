<template>
  <div class="navbar">
    <img class="navbar__logo" src="../assets/images/logo.png" alt="Logo">
    <div class="navbar__separator"/>
    <div class="navbar__links">
      <router-link v-for="link in links" :key="link.text" class="navbar__link" :to="link.link">
        {{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>

import router from "@/router";
import Vue from "vue";

export default {
  name: "Navbar",
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      path: window.location.pathname
    }
  },
  methods: {
    redirect(to) {
      router.push(to);
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    margin: 0;
    padding: 50px;
    height: 104px;
    display: flex;
    align-items: center;

    .navbar__logo {
      width: 153px;
      height: 69px;
    }

    .navbar__separator {
      flex: 1;
    }

    .navbar__links {
      display: flex;

      .navbar__link {
        text-decoration: none !important;
        color: black !important;
        margin-left: 30px;
        position: relative;
        cursor: pointer;

        &.router-link-active {
          font-weight: bold;

          &:after {
            content: '';
            position: absolute;
            bottom: -9px;
            left: 0;
            right: 0;
            height: 4px;
            background: #ff443c;
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .navbar {
      flex-direction: column;
      text-align: center;

      .navbar__links {
        padding: 10px;

        .navbar__link {
          margin-top: 30px;
        }
      }
    }
  }
</style>