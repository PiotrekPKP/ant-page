<template>
  <div class="home">
    <div class="home__image">
      <img src="@/assets/images/big-ant.png" alt="Big ant" />
    </div>
    <div class="home__content">
      <Title title="U 404?" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
name: "Home",
  components: {Title}
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;

    .home__image {
      position: absolute;
      z-index: -2;
    }

    .home__content {
      margin-left: 50%;
    }
  }

  @media screen and (max-width: 700px) {
    .home__content {
      margin-left: 50px !important;
    }
  }
</style>