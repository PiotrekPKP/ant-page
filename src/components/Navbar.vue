<template>
  <div class="navbar">
    <img class="navbar__logo" src="../assets/images/logo.png" alt="Logo">
    <div class="navbar__separator"/>
    <div class="navbar__links">
      <div v-for="link in links" :key="link.text" class="navbar__link" :class="{'navbar__link-active': path === link.link}" @click="redirect(link.link)">
        {{ link.text }}
        {{ log(link.link) }}
      </div>
    </div>
  </div>
</template>

<script>

import router from "@/router";

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
        margin-left: 30px;
        position: relative;
        cursor: pointer;

        &.navbar__link-active {
          font-weight: bold;

          &:after {
            content: '';
            position: absolute;
            bottom: -9px;
            left: 0;
            right: 0;
            height: 4px;
            background: #FF443C;
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