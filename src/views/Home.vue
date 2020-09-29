<template>
  <div class="home">
    <div class="home__image">
      <img src="@/assets/images/big-ant.png" alt="Big ant" />
    </div>
    <div class="home__content">
      <Title title="Our projects" />
      <Lister :list="projects" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Lister from "@/components/Lister";

const projects = [
  {id: 1, name: "ANT Page", image: "/logos/Ant.png"},
  {id: 2, name: "RadioSystem", image: "/logos/Radio.png"},
  {id: 3, name: "UwagiSzolne", image: "/logos/Uwagi.png"},
];

export default {
  name: "Home",
  components: {Lister, Title},
  data() {
    return {
      projects: projects
    }
  }
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